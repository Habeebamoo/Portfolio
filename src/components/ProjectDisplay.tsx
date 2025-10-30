import { SlArrowRight } from "react-icons/sl"
import Button from "./Button"
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
    <div className="border-2 border-mutedLg backdrop-blur-md p-4 rounded-lg">
      <img src={img} className="rounded-md border-1 border-mutedLg" />
      <div className="pl-1 mb-2 mt-4">
        <h1 className="font-inter font-bold text-xl">{title}</h1>
        <p className="mt-1 text-[15px] font-inter text-sm text-muted mb-4">{description}</p>
        <Button 
          text="View project" 
          iconPosition="right" 
          icon={<SlArrowRight />} 
          action={toProject}
          color="bg-purple-900"
          activeColor="active-btn"
          border="purple-border"
        />
      </div>
    </div>
  )
}

export default ProjectDisplay