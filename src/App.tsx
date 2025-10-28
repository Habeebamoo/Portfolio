import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Home from "./pages/Home"

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App