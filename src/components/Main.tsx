import ProjectDisplay from "./ProjectDisplay"
import maildropImg from "../assets/maildrop-img1.png"
import flashquizImg from "../assets/flash-img1.png"

const Main = () => {
  return (
    <>
      <section className="w-[90%] sm:w-[400px] mx-auto">
        {/* <div className="my-20 flex-center">
          <FaArrowDown className="animate-bounce" />
        </div> */}

        {/* About me */}
        <div className="mt-25">
          <h1 className="font-inter text-lg font-bold">About Me</h1>
          <p className="text-sm font-inter mt-2">
            I am Habeeb Amoo, a software developer from Nigeria who loves turning ideas into working applications. With strong foundation in both frontend and backend technologies, I build end-to-end products from designing user experience (UX) to building efficient systems.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-30 mb-30 w-[90%] md:w-[800px] mx-auto">
        <h1 className="font-inter font-bold text-xl text-center mb-10">What I've Been Up To.</h1>

        {/* display */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProjectDisplay 
            img={maildropImg} 
            title="MailDrop" 
            description="A simple and powerful email marketing platform that enable users to create campaigns, manage leads & subscribers, and send promotional emails to them." 
          />
          <ProjectDisplay 
            img={flashquizImg} 
            title="FlashQuiz" 
            description="A Quiz website that allows users to take quizzess accross different topics, categories and get ranked based on thier progress." 
          />
        </div>
      </section>
    </>
  )
}

export default Main