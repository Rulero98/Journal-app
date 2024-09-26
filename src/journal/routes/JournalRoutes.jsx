import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export const journalRouter = createBrowserRouter([
  {
    path: '/',
    element: <JournalRoutes />,
    children: [
      {
        path: '/',
        element: <JournalPage />
      }
    ]
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />,
  },

])