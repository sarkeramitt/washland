"use client"

import { createContext, useState, useEffect } from "react"

// Create context with default values
export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false)

  // Effect to initialize theme from localStorage on mount
  useEffect(() => {
    // Check if user previously set a preference
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Function to toggle theme
  const toggleTheme = () => {
    // Toggle the state
    setDarkMode((prevMode) => {
      const newMode = !prevMode

      // Update localStorage
      localStorage.setItem("theme", newMode ? "dark" : "light")

      // Update HTML class
      if (newMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }

      console.log("Theme toggled to:", newMode ? "dark" : "light")
      return newMode
    })
  }

  // Provide context values to children
  return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

