import { BiLink } from "react-icons/bi"
import img1 from "../../assets/flash-img1.png"
import img2 from "../../assets/flash-img2.png"
import img3 from "../../assets/flash-img-3.png"
import img4 from "../../assets/flash-img4.png"
import Button from "../../components/Button"
import { BsGithub } from "react-icons/bs"

const Flashquiz = () => {
  const toLive = () => {
    window.location.href = "https://flashquizweb.netlify.app"
  }

  const toCode = () => {
    window.location.href = "https://github.com/Habeebamoo/Flashquiz"
  }

  return (
    <main className="w-[90%] sm:w-[95%] mx-auto min-h-[calc(100vh-4rem)]">
      <h1 className="text-3xl font-spaceG">FlashQuiz</h1>
      <p className="mt-2 text-muted font-inter">Quiz Web Application.</p>
      <div className="font-spaceG text-sm text-purple-900 flex-start flex-wrap gap-2 mt-4">
        <div className="py-1 px-3 bg-mutedLg rounded-lg">React.js</div>
        <div className="py-1 px-3 bg-mutedLg rounded-lg">TypeScript</div>
        <div className="py-1 px-3 bg-mutedLg rounded-lg">Golang</div>
        <div className="py-1 px-3 bg-mutedLg rounded-lg">PostgreSQL</div>
      </div>

      {/* About */}
      <h1 className="font-inter text-xl font-bold mt-10">About the Project</h1>
      <p className="mt-2 text-muted font-inter">FlashQuiz is a simple Quiz website that enables users to take quizzess accross different topics and categories, while ranking them based on thier progress and stats.</p>

      {/* Links */}
      <div className="mt-5 flex-start gap-3">
        <Button 
          text="View Live" 
          iconPosition="right" 
          icon={<BiLink />} 
          color="bg-purple-900" 
          activeColor="hover:bg-purple-800 active:bg-purple-800"
          action={toLive}  
        />
        <Button 
          text="View Code" 
          iconPosition="right" 
          icon={<BsGithub />} 
          color="bg-gray-500" 
          activeColor="hover:bg-gray-700 active:bg-gray-700"
          action={toCode}  
        />
      </div>

      <div className="mt-10 mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-3 bg-white border-2 border-mutedLg rounded-lg shadow-lg shadow-gray-300">
          <img src={img1} className="rounded-md border-1 border-mutedLg" />
        </div>
        <div className="p-3 bg-white border-2 border-mutedLg rounded-lg shadow-lg shadow-gray-300">
          <img src={img2} className="rounded-md border-1 border-mutedLg" />
        </div>
        <div className="p-3 bg-white border-2 border-mutedLg rounded-lg shadow-lg shadow-gray-300">
          <img src={img3} className="rounded-md border-1 border-mutedLg" />
        </div>
        <div className="p-3 bg-white border-2 border-mutedLg rounded-lg shadow-lg shadow-gray-300">
          <img src={img4} className="rounded-md border-1 border-mutedLg" />
        </div>
      </div>
    </main>
  )
}

export default Flashquiz