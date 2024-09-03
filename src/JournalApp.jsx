import { RouterProvider } from "react-router-dom"
import { appRouter } from "./router/AppRouter"

export const JournalApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}
