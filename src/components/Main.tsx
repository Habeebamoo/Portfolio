import ProjectDisplay from "./ProjectDisplay"
import maildropImg from "../assets/maildrop-img1.png"
import flashquizImg from "../assets/flash-img1.png"
import { FaGolang } from "react-icons/fa6"
import { BiLogoJavascript, BiLogoPostgresql, } from "react-icons/bi"
import { SiTypescript } from "react-icons/si"
import { FaArrowDown, FaReact } from "react-icons/fa"
import { LiaNodeJs } from "react-icons/lia"
import { BsSend } from "react-icons/bs"
import { useEffect, useState } from "react"

const Main = () => {
  const [form, setForm] = useState({
    senderName: "",
    senderEmail: "",
    message: "",
    receiverEmail: "alexjohnson99.uk@gmail.com",
    subject: "PORTFOLIO CONTACT"
  })

  useEffect(() => {
    const testApi = async () => {
      const res = await fetch("https://contact-app-ea1p.onrender.com/api/v1/health", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": import.meta.env.VITE_X_API_KEY
        },
      })

      const response = await res.json()
      console.log(response);
    };

    testApi()
  }, [])

  return (
    <>
      <section className="w-[90%] sm:w-[400px] mx-auto">
        <div className="my-20 flex-center">
          <FaArrowDown className="animate-bounce" />
        </div>

        {/* About me */}
        <div className="mt-25">
          <h1 className="font-inter text-lg font-bold">About Me</h1>
          <p className="text-sm text-muted font-inter mt-2 text-[15px]">
            I am Habeeb Amoo, a software developer from Nigeria who loves turning ideas into working applications. With strong foundation in both frontend and backend technologies, I build end-to-end products from designing user experience (UX) to building efficient systems.
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
            description="A simple and powerful email marketing platform that enable users to create campaigns, manage leads & subscribers, and send promotional emails to them." 
            location="/project/maildrop"
          />
          <ProjectDisplay 
            img={flashquizImg} 
            title="FlashQuiz" 
            description="A Quiz website that allows users to take quizzess accross different topics, categories and get ranked based on thier progress." 
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
              value={form.senderName}
              onChange={(e) => setForm(prev => ({...prev, senderName: e.target.value}))}
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="font-spaceG">Email</label>
            <input 
              type="email" 
              name="Email"
              className="border-1 border-mutedLg rounded-md w-full p-3 text-sm mt-1 focus:outline-none" 
              value={form.senderEmail}
              onChange={(e) => setForm(prev => ({...prev, senderEmail: e.target.value}))}
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="font-spaceG">Message</label>
            <textarea 
              rows={4} 
              name="Message"
              className="border-1 border-mutedLg rounded-md w-full p-3 text-sm mt-1 focus:outline-none resize-none"
              value={form.message}
              onChange={(e) => setForm(prev => ({...prev, message: e.target.value}))}
              required
            ></textarea>
          </div>

          <button className="bg-purple-900 border-1 border-purple-900 w-full p-2 rounded-md mt-4 text-white font-spaceG cursor-pointer hover:bg-transparent hover:text-purple-900 active:bg-transparent active:text-purple-900 flex-center gap-2">
            <span>Send Message</span>
            <BsSend />
          </button>

        </form>      
      </section>
    </>
  )
}

export default Main