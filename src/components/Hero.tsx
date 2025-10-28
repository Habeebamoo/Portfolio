import avatar from "../assets/anime.jpeg"
import Button from "./Button"
import { FaArrowDown } from "react-icons/fa"

const Hero = () => {
  const toCv = () => {
    window.location.href = "https://drive.google.com/file/d/1_RJoBufJkZkMF6n-GHslYYGOko2T1Qio/view?usp=drivesdk";
  };

  return (
    <section className="flex-center flex-col pt-20">
      <div className="h-30 w-30 rounded-full overflow-hidden shadow-xl border-3 border-white">
        <img src={avatar} className="h-full w-full object-cover" />
      </div>
      <div className="bg-blue-200 py-2 px-4 mt-8 rounded-xl">
        <p className="text-sm font-inter text-blue-900">Full Stack Developer</p>
      </div>
      <h1 className="text-3xl font-spaceG mt-4 mb-6 text-center">Building digital experiences that <span className="text-blue-700">matter.</span></h1>
      <Button 
        text="Download CV" 
        iconPosition="right" 
        icon={<FaArrowDown />} 
        color="bg-purple-900"
        activeColor="hover:bg-purple-800 active:bg-purple-800"
        action={toCv}
      />
    </section>
  )
}

export default Hero