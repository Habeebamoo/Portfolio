import { BiX } from "react-icons/bi"
import { FaCheck } from "react-icons/fa"

const Model = ({ success, text }: { success: boolean, text: string }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-primary flex-center z-20">
      <div className="mt-10 flex-start gap-2 bg-box p-6 border-1 border-border rounded-md">
        <div className={`${success ? "bg-secondary" : "bg-red-500"} h-6 w-6 rounded-full flex-center`}>
          {success ? <FaCheck color="white" /> : <BiX color="white" size={18} />}
        </div>
        <h1 className="font-inter text-accent text-lg">{text}</h1>
      </div>
    </div>
  )
}

export default Model