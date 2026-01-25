import ProjectDisplay from "./ProjectDisplay"
import maildropImg from "../assets/maildrop-img1.png"
import flashquizImg from "../assets/flash-img1.png"
import { FaGolang } from "react-icons/fa6"
import { BiLogoJavascript, BiLogoPostgresql, } from "react-icons/bi"
import { SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { LiaNodeJs } from "react-icons/lia"
import { BsSend } from "react-icons/bs"
import { RiNextjsFill } from "react-icons/ri"

const Main = () => {
  return (
    <>
      <section className="w-[90%] sm:w-[400px] mx-auto">
        {/* About me */}
        <div className="mt-40 px-2">
          <h1 className="font-inter text-2xl font-bold">About Me</h1>
          <p className="leading-6 text-gray-600 font-inter mt-6">
            I craft scalable web applications that helps businesses grow, streamline operations, and deliver real-world results. therefore building systems that are fast, scalable, and built to last.
          </p>
          <p className="leading-6 text-gray-600 font-inter mt-6">
            I am Habeeb Amoo, a software developer with over 2+ years of building high performance applications. with mastery of both frontend and backend development. I specialize in building robust applications, API design, and end-to-end product development.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-30 w-[85%] md:w-[800px] mx-auto">
        <h1 className="font-inter font-bold text-xl text-center mb-10">Some Of My Projects.</h1>

        {/* display */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProjectDisplay 
            img={maildropImg} 
            title="MailDrop" 
            description="An Email Marketing tool designed for managing audiences and sending bulk emails." 
            location="/project/maildrop"
          />
          <ProjectDisplay 
            img={flashquizImg} 
            title="FlashQuiz" 
            description="A Quiz website that allows users to take quizzess and shows progress." 
            location="/project/flashquiz"
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-30 w-[90%] md:w-[400px] mx-auto">
        <h1 className="font-inter font-bold text-xl text-center mb-7">Technologies.</h1>   

        <div className="relative overflow-hidden w-[300px] rounded-3xl mx-auto p-5">
          {/* gradient edges */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-gray-50 from-0% via-transparent via-90% to-gray-50 to-100%"></div>

          {/* content */}
          <div className="flex-center gap-3 absolute top-0 bottom-0 animate-scroll">
            <div><FaGolang size={50} color="black" /></div>
            <div><BiLogoJavascript size={40} color="black" /></div>
            <div><SiTypescript size={30} color="black" /></div>
            <div><FaReact size={30} color="black" /></div>
            <div><RiNextjsFill size={36} color="black" /></div>
            <div><LiaNodeJs size={40} color="black" /></div>
            <div><BiLogoPostgresql size={35} color="black" /></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-20 w-[85%] md:w-[400px] mx-auto">
        <h1 className="font-inter font-bold text-2xl text-center">Let's work together.</h1> 
        <p className="text-muted text-center font-inter text-sm mt-1">I'm always interested in hearing about new projects and oppurtunities</p>
        <form action="https://formspree.io/f/xwpwgvvp" method="POST" className="mt-6">
          <div>
            <label htmlFor="name" className="font-inter">Name</label>
            <input 
              type="text" 
              name="Name"
              className="border-1 border-mutedLg rounded-md w-full p-3 text-sm mt-1 focus:outline-none" 
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="font-inter">Email</label>
            <input 
              type="email" 
              name="Email"
              className="border-1 border-mutedLg rounded-md w-full p-3 text-sm mt-1 focus:outline-none" 
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="font-inter">Message</label>
            <textarea 
              rows={4} 
              name="Message"
              className="border-1 border-mutedLg rounded-md w-full p-3 text-sm mt-1 focus:outline-none resize-none"
              required
            ></textarea>
          </div>

          <button className="py-3 px-5 bg-black border-1 cursor-pointer border-black text-white text-sm font-jsans rounded-md active:bg-transparent hover:bg-transparent hover:text-black active:text-black flex-center w-full gap-2 mt-4">
            <span>Send Message</span>
            <BsSend />
          </button>

        </form>      
      </section>
    </>
  )
}

export default Main