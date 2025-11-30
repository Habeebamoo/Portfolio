import ProjectDisplay from "./ProjectDisplay"
import maildropImg from "../assets/maildrop-img1.png"
import flashquizImg from "../assets/flash-img1.png"
import { FaGolang } from "react-icons/fa6"
import { BiLogoJavascript, BiLogoPostgresql, } from "react-icons/bi"
import { SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { LiaNodeJs } from "react-icons/lia"
import { BsSend } from "react-icons/bs"

const Main = () => {
  return (
    <>
      <section className="w-[90%] sm:w-[400px] mx-auto">
        {/* About me */}
        <div className="mt-30">
          <h1 className="font-inter text-xl font-bold">About Me</h1>
          <p className="leading-6 text-gray-600 font-inter mt-3">
            With various technologies across React.js, Next.js, TypeScript, Node.js, Golang, PostgreSQL, MongoDB. I build ready-to-use web applications.
          </p>
          <p className="leading-6 text-gray-600 font-inter mt-4">
            I am Habeeb Amoo, a software developer from Nigeria who loves turning ideas into working applications. With strong foundation in both frontend and backend technologies, I build end-to-end products from designing user experiences to building efficient systems.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-30 w-[90%] md:w-[800px] mx-auto">
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
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-gray-50 via-transparent to-gray-50"></div>

          {/* content */}
          <div className="flex-center gap-3 absolute top-0 bottom-0 animate-scroll">
            <div className="text-blue-400"><FaGolang size={50} /></div>
            <div className="text-yellow-300"><BiLogoJavascript size={40} /></div>
            <div className="text-blue-800"><SiTypescript size={30} /></div>
            <div className="text-blue-400"><FaReact size={30} /></div>
            <div className="text-green-500"><LiaNodeJs size={40} /></div>
            <div className="text-cyan-700"><BiLogoPostgresql size={35} /></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-20 w-[85%] md:w-[400px] mx-auto">
        <h1 className="font-inter font-bold text-2xl text-center">Let's work together.</h1> 
        <p className="text-muted text-center font-spaceG text-sm mt-1">I'm always interested in hearing about new projects and oppurtunities</p>
        <form action="https://formspree.io/f/xwpwgvvp" method="POST" className="mt-6">
          <div>
            <label htmlFor="name" className="font-spaceG">Name</label>
            <input 
              type="text" 
              name="Name"
              className="border-1 border-mutedLg rounded-md w-full p-3 text-sm mt-1 focus:outline-none" 
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="font-spaceG">Email</label>
            <input 
              type="email" 
              name="Email"
              className="border-1 border-mutedLg rounded-md w-full p-3 text-sm mt-1 focus:outline-none" 
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="font-spaceG">Message</label>
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