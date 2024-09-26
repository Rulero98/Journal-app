import { RouterProvider } from "react-router-dom"
import { authRouter } from "../auth/routes/AuthRoutes"

import { journalRouter } from "../journal/routes/JournalRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"

import { CheckingAuth } from "../ui"

export const AppRouter = () => {
  const { status } = useCheckAuth()
  if (status === 'checking') {
    return <CheckingAuth />
  }
  return (
    <>
      {
        (status === 'authenticated')
          ? <RouterProvider router={journalRouter} />
          : <RouterProvider router={authRouter} />
      }
    </>
  )
}