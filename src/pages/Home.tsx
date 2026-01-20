import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Main from "../components/Main"
import ScrollToTop from "../components/ScrollToTop"

const Home = () => {
  return (
    <main className="bg-accent min-h-[calc(100vh-4rem)]">
      <ScrollToTop />
      <Header />
      <Hero />
      <Main />
      <Footer />
    </main>
  )
}

export default Home