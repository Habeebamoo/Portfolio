import { SlArrowRight } from "react-icons/sl"
import { useNavigate } from "react-router"

interface Props {
  img: string,
  title: string,
  description: string
  location: string
}

const ProjectDisplay = ({ img, title, description, location }: Props) => {
  const navigate = useNavigate()

  const toProject = () => {
    navigate(location)
  }

  return (
    <div className="border-1 border-mutedLg backdrop-blur-md p-6 rounded-2xl">
      <div className="w-full h-[190px] rounded-xl overflow-hidden border-1 border-gray-300">
        <img src={img} className="w-full h-full object-center object-cover" />
      </div>
      <div className="pl-1 mb-2 mt-6">
        <h1 className="font-inter font-bold text-xl">{title}</h1>

        <p className="mt-2 font-inter text-[15px] text-gray-500 mb-4">{description}</p>

        <button onClick={toProject} className="py-4 px-6 bg-gray-200 cursor-pointer text-sm font-jsans rounded-xl flex-center gap-2">
          View Project
          <SlArrowRight size={12} />
        </button>
      </div>
    </div>
  )
}

export default ProjectDisplay