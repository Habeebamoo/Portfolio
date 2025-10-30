import avatar from "../assets/anime.jpeg"
import Button from "./Button"
import { FaArrowDown } from "react-icons/fa"

const Hero = () => {
  const toCv = () => {
    window.location.href = "https://drive.google.com/file/d/1TnoG0xwQkDlw2Rj_gtHwbfEobqXFKTnH/view?usp=drive_link";
  };

  return (
    <section className="flex-center flex-col pt-40">
      <div className="h-30 w-30 rounded-full overflow-hidden shadow-lg border-3 border-white" data-aos="slide-down">
        <img src={avatar} className="h-full w-full object-cover" />
      </div>
      <div className="bg-blue-200 shadow-lg py-2 px-4 mt-8 rounded-xl" data-aos="zoom-in">
        <p className="text-sm font-inter text-blue-900">Habeeb Amoo</p>
      </div>
      <h1 className="text-3xl font-spaceG mt-4 text-center" data-aos="zoom-in">Full Stack <span className="text-purple-900">Developer.</span></h1>
      <p className="mt-1 text-[15px] text-center text-sm text-muted mb-6 font-inter w-[80%]" data-aos="zoom-in">While crafting digital experiences, I enjoy creating fast, secure and reliable solutions.</p>
      <div data-aos="slide-up">
        <Button 
          text="Download CV" 
          iconPosition="right" 
          icon={<FaArrowDown />} 
          color="bg-purple-900"
          activeColor="active-btn"
          border="purple-border"
          action={toCv}
        />
      </div>
    </section>
  )
}

export default Hero