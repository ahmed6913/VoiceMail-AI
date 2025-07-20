const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 py-16 bg-gradient-to-br from-indigo-gradient-start to-blue-gradient-end text-white overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">VoiceMail AI</h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up delay-200">
          Speak smarter. Email faster.
        </p>
        <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
          Add to Chrome
        </button>
      </div>
      {/* Abstract shapes for background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full -top-20 -left-20 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full -bottom-40 -right-40 animate-pulse-slow delay-500"></div>
      </div>
    </section>
  )
}

export default Hero
