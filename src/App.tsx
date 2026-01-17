import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router"

import Home from "./pages/Home"
import ProjectLayout from "./layouts/ProjectLayout"
import MailDrop from "./pages/projects/MailDrop"
import Flashquiz from "./pages/projects/Flashquiz"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectLayout />}>
          <Route path="maildrop" element={<MailDrop />} />
          <Route path="flashquiz" element={<Flashquiz />} />
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