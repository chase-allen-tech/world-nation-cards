const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const { otplibAuthenticator } = require("../config/otplib");
const { mailgunHelper } = require("../config/mailgun");

let otp;

exports.register = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  otp = otplibAuthenticator.generate(email);

  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: `${firstName} ${lastName}`,
        email,
        password,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              const payload = {
                id: user.id,
                name: user.name,
              };

              jwt.sign(
                payload,
                keys.secretOrKey,
                {
                  expiresIn: "5 days", // 1 year in seconds
                },
                (err, token) => {
                  return res.json({
                    success: true,
                    accessToken: "Bearer " + token,
                    user,
                  });
                }
              );

              const mailData = {
                from: "no-reply@gearmobile.com",
                to: email,
                subject: `Your OTP is ${otp}`,
                text: `Please verify your email for GearMobile. verify-code: ${otp} `,
              };

              mailgunHelper
                .messages()
                .send(mailData)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
              console.log("Email Sent: ", otp);
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: "5 days", // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              accessToken: "Bearer " + token,
              user,
            });
          }
        );
      } else {
        return res.status(400).json({ error: "Password incorrect" });
      }
    });
  });
};

exports.verifyEmail = (req, res) => {
  const { code, email } = req.body;
  if (code === otp) {
    console.log("Your Email is verified!  Code: ", code, "OTP: ", otp);

    User.findOne({ email }).then((user) => {
      if (user) {
        User.findOneAndUpdate({ email }, { $set: { isVerified: true } }).then(
          (verifiedUser) => {
            const payload = {
              id: user.id,
              name: user.name,
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: "5 days", // 1 year in seconds
              },
              (err, token) => {
                return res.json({
                  success: true,
                  accessToken: "Bearer " + token,
                  user: verifiedUser,
                });
              }
            );
          }
        );
      } else {
        return res.status(400).json({ email: "Invalid email" });
      }
    });
  } else {
    return res
      .status(400)
      .json({ error: "Email verification is failed! Please resend email" });
  }
};
