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
    <main className="w-[90%] sm:w-[95%] mx-auto min-h-[calc(100vh-4rem)]">
      <h1 className="text-3xl font-spaceG">MailDrop</h1>
      <p className="mt-2 text-muted font-inter">Email Marketing Platform.</p>
      <div className="font-spaceG text-sm text-purple-900 flex-start flex-wrap gap-2 mt-4">
        <div className="py-1 px-3 bg-mutedLg rounded-lg">React.js</div>
        <div className="py-1 px-3 bg-mutedLg rounded-lg">TypeScript</div>
        <div className="py-1 px-3 bg-mutedLg rounded-lg">Golang</div>
        <div className="py-1 px-3 bg-mutedLg rounded-lg">PostgreSQL</div>
      </div>

      {/* About */}
      <h1 className="font-inter text-xl font-bold mt-10">About the Project</h1>
      <p className="mt-2 text-muted font-inter">MailDrop is a full-featured email marketing plaform that supports campaigns & subscribers management while allowing users to reach thier audience with built-in features. It is built to be user-friendly, scalable and performance.</p>

      {/* Links */}
      <div className="mt-5 flex-start gap-3">
        <Button 
          text="View Live" 
          iconPosition="right" 
          icon={<BiLink />} 
          color="bg-purple-900" 
          activeColor="active-btn"
          border="purple-border"
          action={toLive}  
        />
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

      <div className="mt-10 mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 bg-white/30 backdrop-blur-md border-2 border-mutedLg rounded-lg">
          <img src={img1} className="rounded-md border-1 border-mutedLg" />
        </div>
        <div className="p-4 bg-white/30 backdrop-blur-md border-2 border-mutedLg rounded-lg">
          <img src={img2} className="rounded-md border-1 border-mutedLg" />
        </div>
        <div className="p-4 bg-white/30 backdrop-blur-md border-2 border-mutedLg rounded-lg">
          <img src={img3} className="rounded-md border-1 border-mutedLg" />
        </div>
        <div className="p-4 bg-white/30 backdrop-blur-md border-2 border-mutedLg rounded-lg">
          <img src={img4} className="rounded-md border-1 border-mutedLg" />
        </div>
      </div>
    </main>
  )
}

export default MailDrop