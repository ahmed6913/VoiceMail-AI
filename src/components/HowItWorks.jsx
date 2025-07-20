import { MicIcon, MessageSquareTextIcon, MailIcon } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: <MicIcon className="h-12 w-12 text-indigo-600 mb-4" />,
      title: "1. Click Mic",
      description: "Simply click the microphone icon in your Gmail or Google Docs.",
    },
    {
      icon: <MessageSquareTextIcon className="h-12 w-12 text-indigo-600 mb-4" />,
      title: "2. Speak",
      description: "Speak naturally, just like you would in a conversation.",
    },
    {
      icon: <MailIcon className="h-12 w-12 text-indigo-600 mb-4" />,
      title: "3. Auto-generate Email",
      description: "VoiceMail AI instantly converts your speech into a polished email reply.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
