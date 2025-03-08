"use client"

import { useState, useEffect } from "react"
import { Menu, X, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full">
      <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin size={16} className="text-green-500 mr-2" />
              <span className="text-sm">123 Street, New York, USA</span>
            </div>
            <div className="hidden md:flex items-center">
              <Clock size={16} className="text-green-500 mr-2" />
              <span className="text-sm">Mon - Fri : 09.00 AM - 09.00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="text-green-500 mr-2" />
              <span className="text-sm">+012 345 6789</span>
            </div>
            <div className="hidden md:flex items-center space-x-3  bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
              <a href="#" className=" hover:text-green-500">
                <Facebook size={16} />
              </a>
              <a href="#" className=" hover:text-green-500">
                <Twitter size={16} />
              </a>
              <a href="#" className=" hover:text-green-500">
                <Linkedin size={16} />
              </a>
              <a href="#" className=" hover:text-green-500">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={` bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4 px-4 transition-all duration-300 ${scrolled ? "sticky top-0 z-50 shadow-lg" : ""}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-green-500">
            WASHLAND
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-green-500">
              HOME
            </a>
            <a href="#about" className="hover:text-green-500">
              ABOUT
            </a>
            <a href="#services" className="hover:text-green-500">
              SERVICE
            </a>
            <a href="#blog" className="hover:text-green-500">
              BLOG
            </a>
            {/* <div className="relative group">
              <a href="#" className="hover:text-green-500 flex items-center">
                PAGES
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  Page 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  Page 2
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  Page 3
                </a>
              </div>
            </div> */}
            <a href="#contact" className="hover:text-green-500">
              CONTACT
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Use the dedicated ThemeToggle component */}
            <ThemeToggle />

            {/* <a
              href="#contact"
              className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
            >
              Get A Quote <span className="ml-1">→</span>
            </a> */}

            <button
              className="md:hidden p-2 rounded-md hover:bg-green-600 bg-green-500 text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="flex flex-col space-y-4 mt-4 px-4">
            <a href="#" className="py-2 hover:text-green-500">
              HOME
            </a>
            <a href="#about" className="py-2 hover:text-green-500">
              ABOUT
            </a>
            <a href="#services" className="py-2 hover:text-green-500">
              SERVICE
            </a>
            <a href="#blog" className="py-2 hover:text-green-500">
              BLOG
            </a>
            {/* <a href="#" className="py-2 hover:text-green-500">
              PAGES
            </a> */}
            <a href="#contact" className="py-2 hover:text-green-500">
              CONTACT
            </a>
            {/* <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-center transition-colors duration-300"
            >
              Get A Quote
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

