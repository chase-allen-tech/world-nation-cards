/* eslint-disable */
import React from 'react'
// material
import { styled, useTheme } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Button,
  Card,
  Paper,
} from '@material-ui/core'
//
import {
  MotionInView,
  varFadeInUp,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
} from '../../components/animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(14, 0),
}))

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  // marginBottom: theme.spacing(10),
  // [theme.breakpoints.up('md')]: {
  //   height: '100%',
  //   marginBottom: 0,
  //   textAlign: 'left',
  //   display: 'inline-flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  // },
}))

// ----------------------------------------------------------------------

export default function LiveEvents() {
  const theme = useTheme()
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Stack direction="row" justifyContent="center">
              <img src="/images/logoBlack.png" alt="logo black" width="100" />
            </Stack>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h3"
              align="center"
              sx={{ mb: 1, color: 'common.black', textTransform: 'uppercase' }}
            >
              Live Events
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              align="center"
              sx={{ mb: 5 }}
              color="primary"
              variant="subtitle1"
            >
              Small sub-title for the section
            </Typography>
          </MotionInView>

          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <MotionInView variants={varFadeInLeft}>
                <Card
                  sx={{
                    px: 2,
                    py: 4,
                    backgroundColor: '#29B2FE',
                    borderRadius: 0,
                  }}
                >
                  <Stack spacing={2}>
                    <Typography variant="h2" color="common.white">
                      Event Title
                    </Typography>
                    <Stack>
                      <Typography variant="h4" color="common.white">
                        Entry Fee
                      </Typography>
                      <Typography fontSize={128} fontWeight="bold">
                        $15
                      </Typography>
                    </Stack>
                    <Paper sx={{ backgroundColor: 'common.white', py: 3 }}>
                      <Typography
                        align="center"
                        color="common.black"
                        fontSize={24}
                      >
                        Total entries:{' '}
                        <Typography
                          variant="h4"
                          component="span"
                          color="primary"
                        >
                          856
                        </Typography>
                      </Typography>
                      <Typography
                        fontSize={24}
                        align="center"
                        color="common.black"
                      >
                        Total Winners:{' '}
                        <Typography
                          variant="h4"
                          component="span"
                          color="primary"
                        >
                          75
                        </Typography>
                      </Typography>
                    </Paper>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ color: 'common.white', textTransform: 'uppercase' }}
                      size="large"
                    >
                      Register Now
                    </Button>
                  </Stack>
                </Card>
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4}>
              <MotionInView variants={varFadeInDown}>
                <Card
                  sx={{
                    px: 2,
                    py: 4,
                    backgroundColor: 'common.black',
                    borderRadius: 0,
                  }}
                >
                  <Stack spacing={2}>
                    <Typography variant="h2" color="common.white">
                      Event Title
                    </Typography>
                    <Stack>
                      <Typography variant="h4" color="common.white">
                        Entry Fee
                      </Typography>
                      <Typography fontSize={128} fontWeight="bold">
                        $100
                      </Typography>
                    </Stack>
                    <Paper sx={{ backgroundColor: 'common.white', py: 3 }}>
                      <Typography
                        align="center"
                        color="common.black"
                        fontSize={24}
                      >
                        Total entries:{' '}
                        <Typography
                          variant="h4"
                          component="span"
                          color="primary"
                        >
                          856
                        </Typography>
                      </Typography>
                      <Typography
                        fontSize={24}
                        align="center"
                        color="common.black"
                      >
                        Total Winners:{' '}
                        <Typography
                          variant="h4"
                          component="span"
                          color="primary"
                        >
                          75
                        </Typography>
                      </Typography>
                    </Paper>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ color: 'common.white', textTransform: 'uppercase' }}
                      size="large"
                    >
                      Register Now
                    </Button>
                  </Stack>
                </Card>
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4}>
              <MotionInView variants={varFadeInRight}>
                <Card
                  sx={{
                    px: 2,
                    py: 4,
                    backgroundColor: theme.palette.grey[500],
                    borderRadius: 0,
                  }}
                >
                  <Stack spacing={2}>
                    <Typography variant="h2" color="common.white">
                      Event Title
                    </Typography>
                    <Stack>
                      <Typography variant="h4" color="common.white">
                        Entry Fee
                      </Typography>
                      <Typography fontSize={128} fontWeight="bold">
                        $25
                      </Typography>
                    </Stack>
                    <Paper sx={{ backgroundColor: 'common.white', py: 3 }}>
                      <Typography
                        align="center"
                        color="common.black"
                        fontSize={24}
                      >
                        Total entries:{' '}
                        <Typography
                          variant="h4"
                          component="span"
                          color="primary"
                        >
                          856
                        </Typography>
                      </Typography>
                      <Typography
                        fontSize={24}
                        align="center"
                        color="common.black"
                      >
                        Total Winners:{' '}
                        <Typography
                          variant="h4"
                          component="span"
                          color="primary"
                        >
                          75
                        </Typography>
                      </Typography>
                    </Paper>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ color: 'common.white', textTransform: 'uppercase' }}
                      size="large"
                    >
                      Register Now
                    </Button>
                  </Stack>
                </Card>
              </MotionInView>
            </Grid>
          </Grid>
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}
