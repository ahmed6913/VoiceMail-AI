import { MicIcon, MailIcon, BrainIcon } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: <MicIcon className="h-10 w-10 text-white" />,
      title: "Accurate Voice-to-Text",
      description: "Convert your spoken words into precise text, ready for your emails.",
    },
    {
      icon: <MailIcon className="h-10 w-10 text-white" />,
      title: "Seamless Gmail & Docs Integration",
      description: "Works directly within your favorite Google applications for ultimate convenience.",
    },
    {
      icon: <BrainIcon className="h-10 w-10 text-white" />,
      title: "Intelligent GPT-Generated Replies",
      description: "Leverage advanced AI to craft professional and contextually relevant email responses.",
    },
    {
      icon: <MicIcon className="h-10 w-10 text-white" />,
      title: "Multi-language Support",
      description: "Speak in various languages and get accurate transcriptions and replies.",
    },
    {
      icon: <MailIcon className="h-10 w-10 text-white" />,
      title: "Customizable Tone",
      description: "Adjust the tone of your generated emails to be formal, casual, or anything in between.",
    },
    {
      icon: <BrainIcon className="h-10 w-10 text-white" />,
      title: "Quick Edit & Refine",
      description: "Easily review and make quick edits to the AI-generated text before sending.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-gradient-start to-blue-gradient-end p-8 rounded-lg shadow-md text-white flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 rounded-full bg-white bg-opacity-20">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
