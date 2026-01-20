const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 pb-30 w-[90%] sm:w-[400px] mx-auto">
      <hr className="text-gray-900" />
      <p className="mt-6 text-center font-inter text-sm text-gray-600">&copy; {year} Habeeb Amoo. All rights reserved.</p>
    </footer>
  )
}

export default Footer