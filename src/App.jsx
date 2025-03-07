import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Blog from "./components/Blog"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Blog />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App

