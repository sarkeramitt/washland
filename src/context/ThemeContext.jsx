"use client"

import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  // Initialize theme on component mount
  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("darkMode")
    const isDark = savedTheme === "true"

    // Set state based on localStorage or system preference
    setDarkMode(isDark)

    // Apply the theme to the document
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Function to toggle theme
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode

      // Update localStorage
      localStorage.setItem("darkMode", String(newMode))

      // Update document class
      if (newMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }

      return newMode
    })
  }

  return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

