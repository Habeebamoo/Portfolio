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
    <main className="mx-auto min-h-[calc(100vh-4rem)]">
      <h1 className="text-3xl sm:text-4xl font-outfit sm:text-center">FlashQuiz</h1>
      <p className="mt-2 sm:mt-3 text-muted font-inter sm:text-center">Quiz Web App.</p>

      <div className="font-spaceG text-sm text-orange-700 flex-start sm:flex-center flex-wrap gap-2 mt-4 sm:mt-6">
        <div className="py-1 px-3 bg-orange-100 border border-orange-200 rounded-lg">React.js</div>
        <div className="py-1 px-3 bg-orange-100 border border-orange-200 rounded-lg">TypeScript</div>
        <div className="py-1 px-3 bg-orange-100 border border-orange-200 rounded-lg">Golang</div>
        <div className="py-1 px-3 bg-orange-100 border border-orange-200 rounded-lg">PostgreSQL</div>
      </div>

      {/* About */}
      <h1 className="font-inter text-xl font-bold mt-10 sm:mt-20 sm:text-center">
        About the Project
      </h1>

      <p className="mt-2 sm:text-center sm:w-[80%] md:w-[50%] mx-auto text-muted font-inter">
        FlashQuiz is a simple Quiz website that enables users to take quizzess accross different topics and categories, while ranking them based on thier progress and stats.
      </p>

      {/* Links */}
      <div className="mt-5 sm:mt-10 flex-start sm:flex-center gap-3">
        <button onClick={toLive} className="py-3 px-5 bg-black border cursor-pointer border-black text-white text-sm font-jsans rounded-lg active:bg-transparent hover:bg-transparent hover:text-black active:text-black flex-center gap-2">
          <span>View Live</span>
          <BiLink />
        </button>
        <Button 
          text="View Code" 
          iconPosition="right" 
          icon={<BsGithub />} 
          color="bg-gray-500" 
          activeColor="hover:bg-gray-700 active:bg-gray-700"
          border="gray-border"
          action={toCode}  
        />
      </div>

      <div className="mt-10 sm:mt-20 mb-20 w-[90%] mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white/30 backdrop-blur-lg border border-mutedLg rounded-lg">
          <img src={img1} className="rounded-md border border-mutedLg" />
        </div>
        <div className="p-6 bg-white/30 backdrop-blur-md border border-mutedLg rounded-lg">
          <img src={img2} className="rounded-md border border-mutedLg" />
        </div>
        <div className="p-6 bg-white/30 backdrop-blur-md border border-mutedLg rounded-lg">
          <img src={img3} className="rounded-md border border-mutedLg" />
        </div>
        <div className="p-6 bg-white/30 backdrop-blur-md border border-mutedLg rounded-lg">
          <img src={img4} className="rounded-md border border-mutedLg" />
        </div>
      </div>
    </main>
  )
}

export default Flashquiz