import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Projects = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Projects