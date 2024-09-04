import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { LoginPage, RegisterPage } from "../auth/pages"
// import { JournalPage } from "../journal/pages/JournalPage"
import { AppTheme } from "../theme"
export const AppRouter = () => {
  return (
    <>
      <AppTheme>
        <Outlet />
      </AppTheme>
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppRouter />,
    children: [
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
          {
            path: '*',
            element: <Navigate to={'/auth/login'} />,
          },
        ]
      },
    ]
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />,
  }


])
