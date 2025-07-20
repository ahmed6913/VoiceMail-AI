import { FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-gradient-start to-blue-gradient-end">
            VoiceMail AI
          </h3>
          <p className="text-gray-400">Speak smarter. Email faster.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#how-it-works" className="hover:text-indigo-400 transition-colors duration-200">
                How it Works
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-indigo-400 transition-colors duration-200">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-indigo-400 transition-colors duration-200">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-indigo-400 transition-colors duration-200">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} VoiceMail AI. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
