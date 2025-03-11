import { MapPin, Phone, Mail, Twitter, Facebook, Youtube, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-500">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <p>123 Street, New York, USA</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <p>+012 345 67890</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <p>info@washlands.com</p>
              </div>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-green-500">Popular Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> Our Service
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> Service Points
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> Pricing Plan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-green-500">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> Cookies
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> Help
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-green-500 transition-colors duration-300">
                  <span className="mr-2">›</span> FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-green-500">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 dark:bg-gray-800 border border-gray-700 rounded-md dark:focus:outline-none dark:focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 dark:bg-gray-800 border border-gray-700 rounded-md dark:focus:outline-none dark:focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} WASHLANDS. All Right Reserved. Designed By
            <a href="#" className="text-green-500 ml-1 hover:underline">
            AMIT
            </a>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

