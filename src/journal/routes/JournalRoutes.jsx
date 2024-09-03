import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
  return (
    <>
      <div>AppRouter</div>
      <Outlet />
    </>
  )
}

export const journalRouter = createBrowserRouter([
  {
    path: '/',
    element: <JournalPage />,
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />,
  },

])