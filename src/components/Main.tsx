import { FaArrowDown, FaCode, FaDatabase, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa"
import anime from "../assets/anime.jpeg"
import maildrop1 from "../assets/maildrop-img1.png"
import flashquiz1 from "../assets/flash-img1.png"
import { SlArrowRight } from "react-icons/sl"
import { FaGolang } from "react-icons/fa6"
import { BiLogoPostgresql } from "react-icons/bi"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiRedux, SiTypescript } from "react-icons/si"
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5"

const Main = () => {
  return (
    <main className="bg-primary p-2">
      <div className="h-30 w-30 rounded-full overflow-hidden mt-50 mx-auto" data-aos="slide-down">
        <img src={anime} className="h-full w-full object-cover" />
      </div>
      <div className="mt-4" data-aos="zoom-in">
        <h1 className="text-accent font-roboto text-3xl text-center">Full-Stack <span className="text-secondary">Developer</span></h1>
      </div>
      <p className="text-muted text-sm mt-2 text-center" data-aos="zoom-in">While crafting premium digital experiences with modern technologies. I enjoy creating fast, secure and reliable solutions</p>
      <div className="mt-3 flex-center gap-3" data-aos="zoom-in">
        <button className="btn-secondary text-[12px] font-outfit">View My Work</button>
        <button className="btn-primary text-[12px] font-outfit">Download Resume</button>
      </div>

      <div className="mt-20">
        <div className="py-8 px-2 rounded-md w-[90%] md:w-[500px] mx-auto" data-aos="slide-up">
          <h1 className="text-accent font-outfit text-lg">About Me</h1>
          <p className="text-sm text-muted font-inter mt-4">I'm Habeeb Amoo, a 17 year old software developer from Nigeria who enjoys turning ideas into working applications. With 2+ years hands on experience, i like building end-to-end products from designing user expeiences to creating reliable systems behind the scenes.</p>
          <p className="text-sm text-muted font-inter mt-3">I'm always learning, experimenting and improving the way i approach problems</p>
        </div>
      </div>

      <div className="flex-center py-40 text-muted">
        <FaArrowDown size={19} className="animate-bounce" />
      </div>

      <h1 className="text-accent text-center font-inter text-2xl">What I've Been Up To</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[800px] mx-auto">
        <div className="p-5 bg-box border-1 border-border rounded-md" data-aos="zoom-in">
          <div className="rounded-md overflow-hidden">
            <img src={maildrop1} />
          </div>
          <h1 className="text-accent mt-6 font-inter text-xl">MailDrop</h1>
          <p className="text-muted text-sm font-inter mt-2">
            An Email marketing platform that enables users to manage campaigns, subscribers and send targetted or promotional emails to them
          </p>
          <button className="btn-secondary px-4 py-3 mt-4 text-sm flex-center gap-2 mx-auto">
            <span>View Project</span>
            <SlArrowRight />
          </button>
        </div>

        <div className="p-5 bg-box border-1 border-border rounded-md" data-aos="zoom-in">
          <div className="rounded-md overflow-hidden">
            <img src={flashquiz1} />
          </div>
          <h1 className="text-accent mt-6 font-inter text-xl">FlashQuiz</h1>
          <p className="text-muted text-sm font-inter mt-2">
            A Quiz platform that enables users to take quizzes, track progress and get ranked based on thier stats
          </p>
          <button className="btn-secondary px-4 py-3 mt-4 text-sm flex-center gap-2 mx-auto">
            <span>View Project</span>
            <SlArrowRight />
          </button>
        </div>
      </div>

      <h1 className="text-accent text-center font-inter text-2xl mt-20">My Skills</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[800px] mx-auto">
        <div className="bg-box border-1 border-border p-4 rounded-lg" data-aos="slide-up">
          <div className="flex-start gap-2">
            <div className="text-secondary">
              <FaDatabase size={18} />
            </div>
            <h1 className="font-inter text-xl text-accent">Backend Developement</h1>
          </div>
          <p className="text-muted font-inter text-sm py-3">I focus on building reliable and scalable backend systems, clean APIs and efficeint database management.</p>
          <div className="flex-start gap-2">
            <div className="text-blue-500"><FaGolang size={40} /></div>
            <div className="text-blue-500"><BiLogoPostgresql size={26} /></div>
            <div className="text-orange-500"><FaGitAlt size={24} /></div>
          </div>
        </div>
        <div className="bg-box border-1 border-border p-4 rounded-lg" data-aos="slide-up">
          <div className="flex-start gap-2">
            <div className="text-secondary">
              <FaCode size={21} />
            </div>
            <h1 className="font-inter text-xl text-accent">Frontend Developement</h1>
          </div>
          <p className="text-muted font-inter text-sm py-3">I build simple, responsive and user-friendly interfaces that works smoothly accross devices</p>
          <div className="flex-start gap-3 mt-1">
            <div className="text-blue-500"><FaReact size={22} /></div>
            <div className="text-blue-500"><RiTailwindCssFill size={26} /></div>
            <div className="text-purple-500"><SiRedux size={22} /></div>
            <div className="text-blue-500"><SiTypescript size={21} /></div>
            <div className="text-yellow-500"><IoLogoJavascript size={23} /></div>
            <div className="text-orange-500"><FaHtml5 size={24} /></div>
            <div className="text-blue-500"><IoLogoCss3 size={24} /></div>
            <div className="text-orange-500"><FaGitAlt size={24} /></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main