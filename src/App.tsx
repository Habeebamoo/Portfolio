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
import ProjectLayout from "./layouts/ProjectLayout"
import MailDrop from "./pages/projects/MailDrop"

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
        <Route path="/project" element={<ProjectLayout />}>
          <Route path="maildrop" element={<MailDrop />} />
        </Route>
        <Route path="*" element={<Home />} />
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App