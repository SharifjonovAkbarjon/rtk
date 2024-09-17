import { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import { lazy } from "react"
// import SignIn from "./auth/sign-in/SignIn"
// import SignUp from "./auth/sign-up/SignUp"
// import Auth from "./auth/Auth"

const Home = lazy(()=> import("./home/Home"))
const Auth = lazy(()=> import("./auth/Auth"))
const SignIn = lazy(()=> import("./auth/sign-in/SignIn"))
const SignUp = lazy(()=> import("./auth/sign-up/SignUp"))
const Otp = lazy(()=> import("./auth/otp/Otp"))


const RouteController = () => {
  return useRoutes( [
    {
      path: "/",
      element: <Suspense><Home/></Suspense>
    },
    {
      path: "/auth",
      element: <Suspense><Auth/></Suspense>,
      children : [
        {
          path: "/auth/otp",
          element: <Suspense><Otp/></Suspense>
        },
        {
          path: "/auth/sign-in",
          element: <Suspense><SignIn/></Suspense>
        },
        {
          path: "/auth/sign-up",
          element: <Suspense><SignUp/></Suspense>
        }
      ]
    }
  ]
  )
}

export default RouteController