import { FaHeart } from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-box text-sm text-muted font-inter p-4 text-center border-t-1 border-t-border">
      <p className="flex-center gap-2">
        &copy; {year} Habeeb Amoo. Built with
        <span><FaHeart color="red" /></span>
      </p>
    </footer>
  )
}

export default Footer