import { FaArrowDown } from "react-icons/fa"
import anime from "../assets/anime.jpeg"
import maildrop1 from "../assets/maildrop-img1.png"
import flashquiz1 from "../assets/flash-img1.png"
import { SlArrowRight } from "react-icons/sl"

const Main = () => {
  return (
    <main className="bg-primary p-2">
      <div className="h-30 w-30 rounded-full overflow-hidden mt-30 mx-auto" data-aos="slide-down">
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

      <div className="mt-10">
        <div className="py-8 px-4 bg-box border-1 border-border rounded-md w-[90%] md:w-[500px] mx-auto" data-aos="slide-up">
          <h1 className="text-accent font-outfit text-lg">About Me</h1>
          <p className="text-sm text-muted font-inter mt-4">I'm Habeeb Amoo, a 17 year old software developer from Nigeria who enjoys turning ideas into working applications. With 2+ years hands on experience, i like building end-to-end products from designing user expeiences to creating reliable systems behind the scenes.</p>
          <p className="text-sm text-muted font-inter mt-3">I'm always learning, experimenting and improving the way i approach problems</p>
        </div>
      </div>

      <div className="flex-center py-20 text-muted">
        <FaArrowDown size={19} />
      </div>

      <h1 className="text-accent text-center font-inter text-xl">What I've Been Up To</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 w-[90%] md:w-[800px] mx-auto">
        <div className="p-4 bg-box border-1 border-border rounded-md" data-aos="zoom-in">
          <div className="rounded-md overflow-hidden">
            <img src={maildrop1} />
          </div>
          <h1 className="text-accent mt-4 font-inter text-xl">MailDrop</h1>
          <p className="text-muted text-sm font-inter mt-1">
            An Email marketing platform that enables users to manage campaigns, subscribers and send targetted or promotional emails to them
          </p>
          <button className="btn-secondary mt-2 text-sm flex-center gap-2 mx-auto">
            <span>View Project</span>
            <SlArrowRight />
          </button>
        </div>

        <div className="p-4 bg-box border-1 border-border rounded-md" data-aos="zoom-in">
          <div className="rounded-md overflow-hidden">
            <img src={flashquiz1} />
          </div>
          <h1 className="text-accent mt-4 font-inter text-xl">FlashQuiz</h1>
          <p className="text-muted text-sm font-inter mt-1">
            A Quiz platform that enables users to take quizzes, track progress and get ranked based on thier stats
          </p>
          <button className="btn-secondary mt-2 text-sm flex-center gap-2 mx-auto">
            <span>View Project</span>
            <SlArrowRight />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Main