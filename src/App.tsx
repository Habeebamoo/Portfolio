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
import MailDrop from "./pages/projects/MailDrop"
import Projects from "./layouts/Projects"

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
        <Route path="/projects" element={<Projects />}>
          <Route path="maildrop" element={<MailDrop />} />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App