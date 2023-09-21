// ** React Imports
import { lazy } from 'react'

const Login = lazy(() => import('../../views/pages/authentication/Login'))
const LoginBasic = lazy(() => import('../../views/pages/authentication/LoginBasic'))
const LoginCover = lazy(() => import('../../views/pages/authentication/LoginCover'))

const Register = lazy(() => import('../../views/pages/authentication/Register'))
const RegisterBasic = lazy(() => import('../../views/pages/authentication/RegisterBasic'))
const RegisterCover = lazy(() => import('../../views/pages/authentication/RegisterCover'))
const DemoCover = lazy(() => import('../../views/pages/authentication/DemoCover'))

const RegisterMultiSteps = lazy(() => import('../../views/pages/authentication/register-multi-steps'))

const ForgotPassword = lazy(() => import('../../views/pages/authentication/ForgotPassword'))
const ForgotPasswordBasic = lazy(() => import('../../views/pages/authentication/ForgotPasswordBasic'))
const ForgotPasswordCover = lazy(() => import('../../views/pages/authentication/ForgotPasswordCover'))

const ResetPasswordBasic = lazy(() => import('../../views/pages/authentication/ResetPasswordBasic'))
const ResetPasswordCover = lazy(() => import('../../views/pages/authentication/ResetPasswordCover'))

const VerifyEmailBasic = lazy(() => import('../../views/pages/authentication/VerifyEmailBasic'))
const VerifyEmailCover = lazy(() => import('../../views/pages/authentication/VerifyEmailCover'))

const TwoStepsBasic = lazy(() => import('../../views/pages/authentication/TwoStepsBasic'))
const TwoStepsCover = lazy(() => import('../../views/pages/authentication/TwoStepsCover'))

const AuthenticationRoutes = [
  {
    path: `${process.env.PUBLIC_URL}/login`,
    element: <Login />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/login-basic`,
    element: <LoginBasic />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/login-cover`,
    element: <LoginCover />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/register`,
    element: <Register />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/register-basic`,
    element: <RegisterBasic />,
    meta: {
      layout: 'blank'
    }
  },
  // {
  //   path: `${process.env.PUBLIC_URL}/pages/register-cover`,
  //   element: <RegisterCover />,
  //   meta: {
  //     layout: 'blank'
  //   }
  // },
  {
    path: `${process.env.PUBLIC_URL}/pages/register-multi-steps`,
    element: <RegisterMultiSteps />,
    meta: {
      layout: 'blank'
    }
  },

  {
    path: `${process.env.PUBLIC_URL}/forgot-password`,
    element: <ForgotPassword />,
    layout: 'BlankLayout',
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/signup/:packageId`,
    element: <RegisterCover />,
    layout: 'BlankLayout',
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/demo`,
    element: <DemoCover />,
    layout: 'BlankLayout',
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/forgot-password-basic`,
    element: <ForgotPasswordBasic />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/forgot-password-cover`,
    element: <ForgotPasswordCover />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/reset-password-basic`,
    element: <ResetPasswordBasic />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/reset-password-cover`,
    element: <ResetPasswordCover />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/verify-email-basic`,
    element: <VerifyEmailBasic />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/verify-email-cover`,
    element: <VerifyEmailCover />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/two-steps-basic`,
    element: <TwoStepsBasic />,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: `${process.env.PUBLIC_URL}/pages/two-steps-cover`,
    element: <TwoStepsCover />,
    meta: {
      layout: 'blank'
    }
  }
]

export default AuthenticationRoutes
