import { BsGithub } from "react-icons/bs"
import { SlArrowLeft } from "react-icons/sl"
import img1 from "../../assets/maildrop-img1.png"
import img2 from "../../assets/maildrop-img2.png"
import img3 from "../../assets/maildrop-img3.png"
import img4 from "../../assets/maildrop-img4.png"
import { useNavigate } from "react-router"

const MailDrop = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }

  return (
    <main className="bg-primary p-5">
      <div className="mt-30 md:flex-center md:flex-col">
        <button onClick={goBack} className="btn-primary text-sm font-outfit flex-center gap-2">
          <SlArrowLeft size={10} />
          <span>Back to Projects</span>
        </button>
        <h1 className="text-accent font-inter text-2xl mt-2">MailDrop</h1>
        <p className="text-muted text-sm font-inter mt-2">Email Marketing Platform</p>
        <div className="flex-start gap-3 mt-4">
          <button className="btn-secondary text-sm font-outfit flex-center gap-2">
            <span>View Live</span>
          </button>
          <button className="btn-primary text-sm font-outfit flex-center gap-2">
            <BsGithub />
            <span>View Code</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[95%] lg:w-[800px] mx-auto mt-10">
        <div className="bg-box border-1 border-border p-6 rounded-md">
          <h1 className="font-inter text-accent">Project Details</h1>
          <p className="text-sm text-muted font-inter mt-4">
            MailDrop is a simple and powerful email marketing platform that enable users to create campaigns, manage subscribers, track engagements, and connect with them by sending promotional emails.
          </p>
        </div>

        <div className="bg-box border-1 border-border p-6 rounded-md">
          <h1 className="text-accent font-inter">Technologies Used</h1>
          <div className="text-sm flex-start flex-wrap mt-4 gap-2">
            <div className="btn-lang">React.js</div>
            <div className="btn-lang">TailwindCSS</div>
            <div className="btn-lang">Go</div>
            <div className="btn-lang">Gin Framework</div>
            <div className="btn-lang">GORM</div>
            <div className="btn-lang">PostgreSQL</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-30 w-[90%] mx-auto">
        <div className="bg-box p-4 border-1 border-border rounded-lg">
          <img src={img1} className="rounded-md" />
        </div>
        <div className="bg-box p-4 border-1 border-border rounded-lg">
          <img src={img2} className="rounded-md" />
        </div>
        <div className="bg-box p-4 border-1 border-border rounded-lg">
          <img src={img3} className="rounded-md" />
        </div>
        <div className="bg-box p-4 border-1 border-border rounded-lg">
          <img src={img4} className="rounded-md" />
        </div>
      </div>

    </main>
  )
}

export default MailDrop