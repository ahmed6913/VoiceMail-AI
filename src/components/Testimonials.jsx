"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const testimonials = [
  {
    quote: "VoiceMail AI has revolutionized my email workflow. I can now clear my inbox twice as fast!",
    author: "Sarah L., Marketing Manager",
  },
  {
    quote:
      "As a busy professional, this extension is a game-changer. The AI-generated replies are incredibly accurate.",
    author: "John D., CEO",
  },
  {
    quote: "I used to dread writing long emails. Now, I just speak, and VoiceMail AI does the rest. Highly recommend!",
    author: "Emily R., Freelancer",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
        <div className="relative max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          <p className="text-xl italic text-gray-700 mb-6">"{testimonials[currentIndex].quote}"</p>
          <p className="text-lg font-semibold text-indigo-600">- {testimonials[currentIndex].author}</p>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevTestimonial}
              className="bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextTestimonial}
              className="bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-indigo-600" : "bg-gray-300"
              } transition-colors duration-200`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
