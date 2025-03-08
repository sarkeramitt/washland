"use client"

import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  // Debug effect to log theme changes
  useEffect(() => {
    console.log("Current theme:", darkMode ? "dark" : "light")
    console.log("HTML has dark class:", document.documentElement.classList.contains("dark"))
  }, [darkMode])

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default ThemeToggle

