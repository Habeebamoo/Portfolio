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
    <div className="border-1 border-mutedLg backdrop-blur-md p-6 rounded-xl">
      <img src={img} className="rounded-md border-1 border-mutedLg shadow-xl" />
      <div className="pl-1 mb-2 mt-6">
        <h1 className="font-inter font-bold text-xl">{title}</h1>
        <p className="mt-2 font-inter text-[15px] text-gray-600 mb-4">{description}</p>
        <button onClick={toProject} className="py-3 px-5 bg-black border-1 cursor-pointer border-black text-white text-sm font-jsans rounded-lg active:bg-transparent hover:bg-transparent hover:text-black active:text-black">View Project</button>
      </div>
    </div>
  )
}

export default ProjectDisplay