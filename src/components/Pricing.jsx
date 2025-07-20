import { CheckIcon } from "lucide-react"

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      frequency: "per month",
      features: ["Basic voice-to-text", "Limited AI replies (5/day)", "Gmail integration", "Standard support"],
      buttonText: "Get Started Free",
      isPrimary: false,
    },
    {
      name: "Pro Plan",
      price: "$9",
      frequency: "per month",
      features: [
        "Unlimited voice-to-text",
        "Unlimited AI replies",
        "Gmail & Docs integration",
        "Priority support",
        "Customizable tones",
        "Early access to new features",
      ],
      buttonText: "Go Pro",
      isPrimary: true,
    },
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Simple & Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-lg flex flex-col ${
                plan.isPrimary ? "border-4 border-indigo-600" : "border border-gray-200"
              }`}
            >
              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
              <p className="text-5xl font-extrabold mb-2">
                {plan.price}
                <span className="text-xl font-medium text-gray-500">/{plan.frequency}</span>
              </p>
              <ul className="text-left text-gray-700 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                  plan.isPrimary
                    ? "bg-gradient-to-r from-indigo-gradient-start to-blue-gradient-end text-white hover:opacity-90 shadow-md"
                    : "bg-gray-100 text-indigo-600 hover:bg-gray-200"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
