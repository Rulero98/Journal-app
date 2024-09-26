import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export const authRouter = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthRoutes />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ]
  },
  {
    path: '/*',
    element: <Navigate to={'/auth/login'} />,
  }
])