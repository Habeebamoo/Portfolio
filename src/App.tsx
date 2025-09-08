import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import HomePage from "./pages/HomePage"

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App