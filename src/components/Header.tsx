import { BsTwitterX } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Header = () => {
  const toGitHub = () => {
    window.location.href = "https://github.com/Habeebamoo"
  }

  const toLinkedIn = () => {
    window.location.href = "https://linkedin.com/in/habeeb-amoo-2a5787380"
  }

  const toTwitter = () => {
    window.location.href = "https://x.com/Habeeb_O_Amoo"
  }

  return (
    <header className="fixed top-0 left-0 right-0 p-6 z-10">
      <div className="flex-center">
        <div className="backdrop-blur-md bg-box/80 border-2 border-border shadow-lg flex-center py-4 px-6 rounded-lg gap-6 gap-8 text-muted">
          <div onClick={toGitHub}>
            <FaGithub size={20} />
          </div>
          <div onClick={toLinkedIn}>
            <FaLinkedin size={20} />
          </div>
          <div onClick={toTwitter}>
            <BsTwitterX size={19} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header