import { Suspense, lazy } from 'react'
import { Navigate, useRoutes, useLocation } from 'react-router-dom'
// layouts
import GuestGuard from '../guards/GuestGuard'

import MainLayout from '../layouts/main'
import DashboardLayout from '../layouts/dashboard'
import LogoOnlyLayout from '../layouts/LogoOnlyLayout'
// components
import LoadingScreen from '../components/LoadingScreen'

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation()
  const isDashboard = pathname.includes('/dashboard')

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed',
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    // Auth Routes
    // {
    //   path: 'auth',
    //   children: [
    //     {
    //       path: 'login',
    //       element: (
    //         <GuestGuard>
    //           <Login />
    //         </GuestGuard>
    //       )
    //     },
    //     {
    //       path: 'register',
    //       element: (
    //         <GuestGuard>
    //           <Register />
    //         </GuestGuard>
    //       )
    //     },
    //     { path: 'login', element: <Login /> },
    //     { path: 'register', element: <Register /> },
    //     { path: 'reset-password', element: <ResetPassword /> },
    //     { path: 'verify', element: <VerifyCode /> }
    //   ]
    // },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/dashboard/userManagement" replace />,
        },
        { path: '/userManagement', element: <UserManagement /> },
        { path: '/eventManagement', element: <EventManagement /> },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/purchaseTicket', element: <PurchaseTicket /> },
        { path: '/roomStatus', element: <RoomStatus /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/aboutUs', element: <AboutUs /> },
        { path: '/contactUs', element: <ContactUs /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/authentication/Login')))
const Register = Loadable(
  lazy(() => import('../pages/authentication/Register')),
)
const ResetPassword = Loadable(
  lazy(() => import('../pages/authentication/ResetPassword')),
)
const VerifyCode = Loadable(
  lazy(() => import('../pages/authentication/VerifyCode')),
)
// Dashboard
const UserManagement = Loadable(
  lazy(() => import('../pages/admin/UserManagement')),
)
const EventManagement = Loadable(
  lazy(() => import('../pages/admin/EventManagement')),
)
const NotFound = Loadable(lazy(() => import('../pages/Page404')))
// Main
const HomePage = Loadable(lazy(() => import('../pages/HomePage')))
const PurchaseTicket = Loadable(lazy(() => import('../pages/PurchaseTicket')))
const RoomStatus = Loadable(lazy(() => import('../pages/RoomStatus')))
const Portfolio = Loadable(lazy(() => import('../pages/Portfolio')))
const AboutUs = Loadable(lazy(() => import('../pages/AboutUs')))
const ContactUs = Loadable(lazy(() => import('../pages/ContactUs')))
