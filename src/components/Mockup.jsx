const Mockup = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">See VoiceMail AI in Action</h2>
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-200">
          {/* Browser window controls */}
          <div className="flex items-center p-3 border-b border-gray-200 bg-gray-50">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="flex-grow text-center">
              <span className="text-sm text-gray-500">voicemailai.com</span>
            </div>
          </div>
          {/* Mockup image */}
          <div className="p-4">
            <img
              src="/placeholder.svg?height=600&width=1000"
              alt="VoiceMail AI Browser Mockup"
              className="w-full h-auto rounded-md shadow-inner"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mockup
