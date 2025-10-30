import { Outlet, useNavigate } from "react-router"
import ScrollToTop from "../components/ScrollToTop"
import Button from "../components/Button"
import { BsArrowLeft } from "react-icons/bs"
import Footer from "../components/Footer"

const ProjectLayout = () => {
  const navigate = useNavigate()

  const toProjects = () => {
    navigate("/")
  }

  return (
    <main className="bg-accent">
      <ScrollToTop />
      <div className="px-4 pt-10 mb-10">
        <Button 
          text="Back" 
          iconPosition="left" 
          icon={<BsArrowLeft />} 
          action={toProjects} 
          color="bg-purple-900" 
          activeColor="active-btn"
          border="purple-border" 
        />
      </div>
      <Outlet />
      <Footer />
    </main>
  )
}

export default ProjectLayout