import { BiGlasses } from "react-icons/bi"
import Footer from "../components/Footer"
import Header from "../components/Header"

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="bg-primary h-[95vh] pt-60">
        <div className="flex-center flex-col">
          <div className="text-muted">
            <BiGlasses size={100} />
          </div>
          <h1 className="font-outfit text-accent text-2xl mt-2">Oops</h1>
          <p className="text-sm font-inter text-muted mt-1">This Route does not exists</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound