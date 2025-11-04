import { IoCheckmarkCircle } from "react-icons/io5"
import { MdCancel } from "react-icons/md"

interface Props {
  type: "success" | "error"
  msg: string
}

const Modal = ({ type, msg }: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/85 flex-center z-50">
      <div className="bg-white p-6 rounded-xl flex-start gap-2" data-aos="slide-down">
        {type === "success" ? 
          <IoCheckmarkCircle size={20} color="green" />
        :
          <MdCancel size={20} color="red" />
        }
        <h1 className="font-inter">{msg}</h1>
      </div>
    </div>
  )
}

export default Modal