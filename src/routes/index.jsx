import { useRoutes } from "react-router-dom"
import { lazy } from "react"
import Suspense from "../utils"
import Header from "../components/header/Header"


const Auth = lazy(() => import("./auth/Auth"))
const SignIn = lazy(() => import("./auth/sign-in/SignIn"))
const SignUp = lazy(() => import("./auth/sign-up/SignUp"))
const Otp = lazy(() => import("./auth/otp/Otp"))
const Home = lazy(() => import("./home/Home"))
const Search = lazy(()=> import("./search/Search"))


const RouteController = () => {
  return useRoutes([
    {
      element: <Suspense><Header/></Suspense>,
      childen: [
        {
          path: "/",
          element: <Suspense><Home/></Suspense>
        },
        {
          path: "/search",
          element: <Suspense><Search/></Suspense>
        }
      ]
    },
    {
      path: "/auth",
      element: <Suspense><Auth /></Suspense>,
      children: [
        {
          path: "/auth/otp",
          element: <Suspense><Otp /></Suspense>
        },
        {
          path: "/auth/sign-in",
          element: <Suspense><SignIn /></Suspense>
        },
        {
          path: "/auth/sign-up",
          element: <Suspense><SignUp /></Suspense>
        },
      ]
    }
  ]
  )
}

export default RouteController