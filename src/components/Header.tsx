import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"

const Header = () => {
  return (
    <header className="bg-primary border-b-1 border-b-border">
      <div className="py-4 px-6 flex-between">
        <h1 className="font-roboto text-xl text-accent">Habeeb Amoo</h1>
        <div className="flex-between gap-4 text-muted">
          <FaGithub size={18} />
          <FaLinkedin size={18} />
          <MdMail size={20} />
        </div>
      </div>
    </header>
  )
}

export default Header