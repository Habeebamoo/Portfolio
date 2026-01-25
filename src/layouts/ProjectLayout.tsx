import { Outlet, useNavigate } from "react-router"
import ScrollToTop from "../components/ScrollToTop"
import { BsArrowLeft } from "react-icons/bs"
import Footer from "../components/Footer"

const ProjectLayout = () => {
  const navigate = useNavigate()

  const toProjects = () => {
    navigate("/")
  }

  return (
    <main className="w-[90%] sm:w-[95%] mx-auto">
      <ScrollToTop />

      <div className="pt-10 mb-10">
        <button onClick={toProjects} className="py-2 px-4 bg-black border cursor-pointer border-black text-white text-sm font-jsans rounded-lg active:bg-transparent hover:bg-transparent hover:text-black active:text-black flex-center gap-2">
          <BsArrowLeft />
          <span>Back</span>
        </button>
      </div>

      <Outlet />

      <Footer />
    </main>
  )
}

export default ProjectLayout