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
import NotFound from "./pages/Notfound"
import FlashQuiz from "./pages/projects/FlashQuiz"

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
          <Route path="flashquiz" element={<FlashQuiz />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App