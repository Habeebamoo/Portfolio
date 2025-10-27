import { BsGithub, BsMailbox } from "react-icons/bs"
import { SlArrowLeft } from "react-icons/sl"
import img1 from "../../assets/maildrop-img1.png"
import img2 from "../../assets/maildrop-img2.png"
import img3 from "../../assets/maildrop-img3.png"
import img4 from "../../assets/maildrop-img4.png"
import { useNavigate } from "react-router"
import { FaExternalLinkAlt } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"

const MailDrop = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }

  const viewLive = () => {
    window.location.href= "https://maildrop.netlify.app"
  }

  const viewRepo = () => {
    window.location.href= "https://github.com/Habeebamoo/MailDrop"
  }

  return (
    <main className="bg-primary p-5">
      <div className="mt-30 md:flex-center md:flex-col pl-2">
        <button onClick={goBack} className="btn-primary text-sm font-outfit flex-center gap-2">
          <SlArrowLeft size={10} />
          <span>Back to Projects</span>
        </button>
        <h1 className="text-accent font-inter text-2xl mt-4">MailDrop</h1>
        <p className="text-muted text-sm font-inter mt-2">Email Marketing Platform</p>
      </div>

      <div className="bg-box border-1 border-border p-6 rounded-md w-[95%] md:w-[400px] mx-auto mt-10">
        {/* Details */}
        <h1 className="font-inter text-accent">Project Details</h1>
        <p className="text-sm text-muted font-inter mt-4">
          MailDrop is a simple and powerful email marketing platform that enable users to create campaigns, manage subscribers, track engagements, and connect with them by sending promotional emails.
        </p>

        {/* Technologies */}
        <div className="mt-8">
          <h1 className="text-accent font-inter">Technologies Used</h1>
          <div className="text-sm flex-start flex-wrap mt-4 gap-2">
            <div className="btn-lang">React.js</div>
            <div className="btn-lang">TypeScript</div>
            <div className="btn-lang">Golang</div>
            <div className="btn-lang">Gin Framework</div>
            <div className="btn-lang">PostgreSQL</div>
          </div>
        </div>
      </div>

      <div className="flex-center gap-3 mt-8">
        <button onClick={viewLive} className="btn-secondary text-sm font-outfit flex-center gap-2">
          <FaExternalLinkAlt size={12} />
          <span>View Live</span>
        </button>
        <button onClick={viewRepo} className="btn-primary text-sm font-outfit flex-center gap-2">
          <BsGithub />
          <span>View Code</span>
        </button>
      </div>

      <div className="bg-box border-1 border-border p-6 rounded-md w-[95%] md:w-[400px] mx-auto mt-10">
        <h1 className="text-accent font-inter">Challenges</h1>
        <div className="mt-4">
          <BsMailbox color="#1995e7ff" size={20} />
          <p className="text-muted text-sm font-inter mt-2">Sending bulk promotional emails to subscribers without delaying API response and user experience (UX)</p>
        </div>
        <div className="text-blue-400 flex-start mt-4 gap-1">
          <FaGear />
          <p className="font-roboto">Solution</p>
        </div>
        <p className="text-muted text-sm font-inter mt-2">Utilized Concurrency (Goroutines & Worker Pools) to implement a fan-out fan-in pattern to acheive parallel email processing</p>
      </div>

      <div className=" mt-10 mb-30 flex-center flex-col">
        <div className="bg-box p-3 border-1 border-border rounded-lg w-[95%] md:w-[400px]">
          <img src={img1} className="rounded-md" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 mx-auto w-[95%] lg:w-[700px]">
          <div className="bg-box p-3 border-1 border-border rounded-lg">
            <img src={img2} className="rounded-md" />
          </div>
          <div className="bg-box p-3 border-1 border-border rounded-lg">
            <img src={img3} className="rounded-md" />
          </div>
          <div className="bg-box p-3 border-1 border-border rounded-lg">
            <img src={img4} className="rounded-md" />
          </div>
        </div>
      </div>

    </main>
  )
}

export default MailDrop