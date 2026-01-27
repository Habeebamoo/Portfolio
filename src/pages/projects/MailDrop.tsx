import { BiLink } from "react-icons/bi"
import img1 from "../../assets/maildrop-img1.png"
import img2 from "../../assets/maildrop-img2.png"
import img3 from "../../assets/maildrop-img3.png"
import img4 from "../../assets/maildrop-img4.png"
import Button from "../../components/Button"
import { BsGithub } from "react-icons/bs"

const MailDrop = () => {
  const toLive = () => {
    window.location.href = "https://maildrop.netlify.app"
  }

  const toCode = () => {
    window.location.href = "https://github.com/Habeebamoo/Maildrop"
  }

  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <h1 className="text-3xl sm:text-4xl font-outfit sm:text-center">MailDrop</h1>
      <p className="mt-2 sm:mt-3 text-muted font-inter sm:text-center">Email Marketing Platform.</p>

      <div className="font-spaceG text-sm text-orange-700 flex-start sm:flex-center flex-wrap gap-2 mt-4">
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
        MailDrop is a full-featured email marketing plaform that supports campaigns & subscribers management while allowing users to reach thier audience with built-in features. It is built to be user-friendly, scalable and performance.
      </p>

      {/* Links */}
      <div className="mt-5 sm:mt-15 flex-start sm:flex-center gap-3">
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
        <div className="p-6 bg-white/30 backdrop-blur-md border border-mutedLg rounded-lg">
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

export default MailDrop