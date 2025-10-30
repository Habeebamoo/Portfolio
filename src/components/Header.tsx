import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"

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
    <header className="fixed z-20 top-0 left-0 right-0 p-10 flex-center">
      <nav className="flex-center gap-6 backdrop-blur-md bg-white/30 py-3 px-6 rounded-lg border-1 border-mutedLg text-[#444]">
        <div onClick={toGitHub}>
          <BsGithub size={26} />
        </div>
        <div onClick={toTwitter}>
          <BsTwitterX size={25} />
        </div>
        <div onClick={toLinkedIn}>
          <BsLinkedin size={25} />
        </div>
      </nav>
    </header>
  )
}

export default Header