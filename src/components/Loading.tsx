const Loading = () => {
  return (
    <section className="fixed top-0 left-0 bottom-0 right-0 bg-black/85 flex-center z-30">
      <div className="flex-center">
        <div className="relative w-24 h-24 animate-spin" style={{ animationDuration: "2s" }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Loading