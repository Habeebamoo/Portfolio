import { Outlet, useNavigate } from "react-router"
import ScrollToTop from "../components/ScrollToTop"
import Button from "../components/Button"
import { BsArrowLeft } from "react-icons/bs"

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
          text="Back to Projects" 
          iconPosition="left" 
          icon={<BsArrowLeft />} 
          action={toProjects} 
          color="bg-purple-900" 
          activeColor="hover:bg-purple-800 active:bg-purple-800" 
        />
      </div>
      <Outlet />
    </main>
  )
}

export default ProjectLayout