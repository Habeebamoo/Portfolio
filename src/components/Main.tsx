import { FaArrowDown, FaCloudDownloadAlt, FaCode, FaDatabase, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa"
import anime from "../assets/anime.jpeg"
import maildrop1 from "../assets/maildrop-img1.png"
import flashquiz1 from "../assets/flash-img1.png"
import { SlArrowRight } from "react-icons/sl"
import { FaGolang } from "react-icons/fa6"
import { BiLogoPostgresql } from "react-icons/bi"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiRedux, SiTypescript } from "react-icons/si"
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5"
import { useNavigate } from "react-router"
import CodeBox from "./CodeBox"
import Loading from "./Loading"
import { useEffect, useState } from "react"
import Model from "./Model"

const Main = () => {
  const [model, setModel] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("Success")
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (model) {
      setTimeout(() => setModel(false), 3000)
    }
  }, [model])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("https://contact-go-egvq.onrender.com/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": import.meta.env.VITE_X_API_KEY,
        },
        body: JSON.stringify(form)
      })

      const response = await res.json()

      if (res.ok) {
        setModel(true)
        setSuccess(true)
        setMessage(response.message)
      } else {
        setModel(true)
        setSuccess(false)
        setMessage(response.message)
      }
    } catch (err) {
      setModel(true)
      setSuccess(false)
      setMessage("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const toResume = () => {
    window.location.href = "https://drive.google.com/file/d/1_RJoBufJkZkMF6n-GHslYYGOko2T1Qio/view?usp=drivesdk";
  }

  const toMailDrop = () => {
    navigate("/projects/maildrop")
  }

  const toFlashquiz = () => {
    navigate("/projects/flashquiz")
  }

  return (
    <main className="bg-primary p-2">
      {loading && <Loading />}
      {model && <Model success={success} text={message} />}
      <div className="h-30 w-30 rounded-full overflow-hidden mt-50 mx-auto" data-aos="slide-down">
        <img src={anime} className="h-full w-full object-cover" />
      </div>
      <div className="mt-4" data-aos="zoom-in">
        <h1 className="text-accent font-roboto text-3xl text-center">Full-Stack <span className="text-secondary">Developer</span></h1>
      </div>
      <p className="text-muted text-sm mt-2 text-center sm:w-[400px] mx-auto px-2" data-aos="zoom-in">While crafting premium digital experiences with modern technologies. I enjoy creating fast, secure and reliable solutions</p>
      <div className="mt-4 flex-center " data-aos="zoom-in">
        <button onClick={toResume} className="btn-secondary flex-center gap-2 text-[12px] font-outfit">
          <FaCloudDownloadAlt size={15} />
          <span>Download Resume</span>
        </button>
      </div>

      <CodeBox />

      <div className="mt-30">
        <div className="py-8 px-2 rounded-md w-[90%] md:w-[500px] mx-auto" data-aos="slide-up">
          <h1 className="text-accent font-outfit text-lg">About Me</h1>
          <p className="text-sm text-muted font-inter mt-4">I'm Habeeb Amoo, a 17 year old software developer from Nigeria who enjoys turning ideas into working applications. With 2+ years hands on experience, i build end-to-end products from designing user expeiences to creating reliable systems behind the scenes.</p>
          <p className="text-sm text-muted font-inter mt-3">I'm always learning, experimenting and improving the way i approach problems</p>
        </div>
      </div>

      <div className="flex-center py-40 text-muted">
        <FaArrowDown size={19} className="animate-bounce" />
      </div>

      <h1 className="text-accent text-center font-inter text-2xl">What I've Been Up To</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] md:w-[700px] lg:w-[800px] mx-auto">
        <div className="p-5 bg-box border-1 border-border rounded-lg" data-aos="zoom-in">
          <div className="rounded-md overflow-hidden">
            <img src={maildrop1} />
          </div>
          <h1 className="text-accent mt-6 font-inter text-xl">MailDrop</h1>
          <p className="text-muted text-sm font-inter mt-2">
            An Email marketing platform that enables users to manage campaigns, subscribers and send targetted or promotional emails to them
          </p>
          <button onClick={toMailDrop} className="btn-secondary px-4 py-3 mt-4 text-sm flex-center gap-2 mx-auto">
            <span>View Project</span>
            <SlArrowRight />
          </button>
        </div>

        <div className="p-5 bg-box border-1 border-border rounded-lg" data-aos="zoom-in">
          <div className="rounded-md overflow-hidden">
            <img src={flashquiz1} />
          </div>
          <h1 className="text-accent mt-6 font-inter text-xl">FlashQuiz</h1>
          <p className="text-muted text-sm font-inter mt-2">
            A Quiz platform that enables users to take quizzes, track progress and get ranked based on thier stats
          </p>
          <button onClick={toFlashquiz} className="btn-secondary px-4 py-3 mt-4 text-sm flex-center gap-2 mx-auto">
            <span>View Project</span>
            <SlArrowRight />
          </button>
        </div>
      </div>

      <h1 className="text-accent text-center font-inter text-2xl mt-30">My Skills</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[700px] lg:w-[800px] mx-auto">
        <div className="bg-box border-1 border-border p-4 rounded-lg" data-aos="zoom-in">
          <div className="flex-start gap-2">
            <div className="text-secondary">
              <FaDatabase size={18} />
            </div>
            <h1 className="font-inter text-xl text-accent">Backend Developement</h1>
          </div>
          <p className="text-muted font-inter text-sm py-3">I focus on building reliable and scalable backend systems, clean APIs and efficient database management.</p>
          <div className="flex-start gap-2">
            <div className="text-blue-400"><FaGolang size={40} /></div>
            <div className="text-sky-700"><BiLogoPostgresql size={27} /></div>
          </div>
        </div>
        <div className="bg-box border-1 border-border p-4 rounded-lg" data-aos="zoom-in">
          <div className="flex-start gap-2">
            <div className="text-secondary">
              <FaCode size={21} />
            </div>
            <h1 className="font-inter text-xl text-accent">Frontend Developement</h1>
          </div>
          <p className="text-muted font-inter text-sm py-3">I build simple, responsive and user-friendly interfaces that works smoothly accross devices</p>
          <div className="flex-start gap-3 mt-1">
            <div className="text-blue-400"><FaReact size={22} /></div>
            <div className="text-blue-400"><RiTailwindCssFill size={26} /></div>
            <div className="text-purple-500"><SiRedux size={22} /></div>
            <div className="text-blue-500"><SiTypescript size={21} /></div>
            <div className="text-yellow-500"><IoLogoJavascript size={24} /></div>
            <div className="text-orange-500"><FaHtml5 size={25} /></div>
            <div className="text-blue-500"><IoLogoCss3 size={25} /></div>
            <div className="text-orange-500"><FaGitAlt size={25} /></div>
          </div>
        </div>
      </div>

      <h1 className="text-accent text-center font-inter text-2xl mt-30">Let's Work Together</h1>
      <div className="p-6 bg-box border-1 border-border rounded-lg w-[90%] md:w-[500px] mx-auto mt-6 mb-20">
        <h1 className="font-inter text-accent text-xl">Send a Message</h1>
        <p className="text-muted font-inter text-sm py-2">I'm always interested in new opportunities and exciting projects. Whether you need a complete website or want to discuss a potential collaboration, I'd love to hear from you</p>
        <form onSubmit={handleSubmit} className="mt-5">
          <div>
            <label htmlFor="name" className="text-sm text-accent font-inter">Your Name</label>
            <input 
              type="text" 
              name="name"
              id="name"
              className="border-1 border-border p-2 rounded-md text-white font-inter mt-1 w-full"
              value={form.name}
              onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))}
              required
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="text-sm text-accent font-inter">Your Email</label>
            <input 
              type="email" 
              name="email"
              id="email"
              className="border-1 border-border p-2 rounded-md mt-1 text-white font-inter w-full"
              value={form.email}
              onChange={(e) => setForm(prev => ({...prev, email: e.target.value}))}
              required
            />
          </div>
          <div className="mt-3">
            <label htmlFor="message" className="text-sm text-accent font-inter">Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows={4}
              className="border-1 border-border p-2 rounded-md mt-1 w-full resize-none text-white font-inter"
              value={form.message}
              onChange={(e) => setForm(prev => ({...prev, message: e.target.value}))}
              required
            ></textarea>
          </div>
          <button className="btn-secondary w-full mt-6 font-outfit">Send Message</button>
        </form>
      </div>
    </main>
  )
}

export default Main