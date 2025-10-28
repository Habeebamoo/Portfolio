import { SlArrowRight } from "react-icons/sl"
import Button from "./Button"

interface Props {
  img: string,
  title: string,
  description: string
}

const ProjectDisplay = ({ img, title, description }: Props) => {
  const toProject = () => {

  }

  return (
    <div className="bg-white border-1 border-mutedLg p-4 rounded-lg">
      <img src={img} className="rounded-md border-1 border-mutedLg" />
      <div className="pl-1 mt-4">
        <h1 className="font-inter font-bold text-xl">{title}</h1>
        <p className="mt-1 font-inter text-sm text-muted mb-4">{description}</p>
        <Button 
          text="View project" 
          iconPosition="right" 
          icon={<SlArrowRight />} 
          action={toProject}
          color="bg-purple-900"
          activeColor="hover:bg-purple-800 active:bg-purple-900"
        />
      </div>
    </div>
  )
}

export default ProjectDisplay