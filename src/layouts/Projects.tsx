import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ScrollToTop from "../components/ScrollToTop"

const Projects = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Projects