import avatar from "../assets/anime.jpeg"

const Hero = () => {
  const toCv = () => {
    window.location.href = "https://drive.google.com/file/d/1TnoG0xwQkDlw2Rj_gtHwbfEobqXFKTnH/view?usp=drive_link";
  };

  return (
    <section className="px-6 sm:w-[400px] mx-auto pt-40">
      <div className="h-30 w-30 rounded-full overflow-hidden shadow-lg border-3 border-white" data-aos="slide-down">
        <img src={avatar} className="h-full w-full object-cover" />
      </div>
      <h1 className="text-xl font-jsans text-orange-600 mt-6" data-aos="zoom-in">Habeeb Amoo,</h1>
      <h1 className="text-3xl font-jsans mt-2" data-aos="zoom-in">Full Stack Developer.</h1>
      <p className="mt-3 text-gray-600 mb-6 font-inter w-[90%]" data-aos="zoom-in">While crafting digital experiences, I enjoy creating fast, secure and reliable solutions.</p>
      <div data-aos="slide-up">
        <button
          onClick={toCv} 
          className="py-3 px-5 bg-black border-1 cursor-pointer border-black text-white text-sm font-jsans rounded-xl active:bg-transparent hover:bg-transparent hover:text-black active:text-black">
          Download CV
        </button>
      </div>
    </section>
  )
}

export default Hero