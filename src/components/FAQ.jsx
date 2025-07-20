"use client"

import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

const faqs = [
  {
    question: "What is VoiceMail AI?",
    answer:
      "VoiceMail AI is a Chrome Extension that converts your spoken words into smart, AI-generated email replies, helping you communicate faster and more efficiently.",
  },
  {
    question: "Which platforms does it support?",
    answer:
      "Currently, VoiceMail AI seamlessly integrates with Gmail and Google Docs. We are working on expanding support to other platforms.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Yes, we prioritize your privacy and security. All voice data is processed securely and is not stored beyond the immediate generation of your email.",
  },
  {
    question: "How accurate are the AI-generated replies?",
    answer:
      "Our AI uses advanced language models to generate highly accurate and contextually relevant replies. You can always review and edit the suggestions before sending.",
  },
  {
    question: "Do I need a Google account to use it?",
    answer: "Yes, VoiceMail AI requires a Google account for integration with Gmail and Google Docs.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6 text-indigo-600" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <p id={`faq-answer-${index}`} className="mt-4 text-gray-600 text-lg animate-fade-in">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
