"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, User, Calendar, MessageSquare } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Achieving True Exterior Shine",
    excerpt: "Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.",
    image:"./public/blog-1.jpg",
    date: "10 Feb, 2023",
    author: "Admin",
    comments: 23,
  },
  {
    id: 2,
    title: "Cleanliness Beyond the Hood",
    excerpt: "Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.",
    image:
      "./public/blog-2.jpg",
    date: "15 Feb, 2023",
    author: "Admin",
    comments: 17,
  },
  {
    id: 3,
    title: "Safety and Style Combined",
    excerpt: "Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.",
    image:
      "./public/blog-3.jpg",
    date: "22 Feb, 2023",
    author: "Admin",
    comments: 9,
  },
  {
    id: 4,
    title: "Why Interior Detail Matters",
    excerpt: "Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.",
    image:
      "./public/blog-4.jpg",
    date: "28 Feb, 2023",
    author: "Admin",
    comments: 14,
  },
]

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const slideRef = useRef(null)
  const visiblePosts = 3 // Number of posts visible at once on desktop

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [activeIndex])

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    const nextIndex = (activeIndex + 1) % (blogPosts.length - visiblePosts + 1)
    setActiveIndex(nextIndex)

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    const prevIndex = (activeIndex - 1 + (blogPosts.length - visiblePosts + 1)) % (blogPosts.length - visiblePosts + 1)
    setActiveIndex(prevIndex)

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Calculate total number of pages for indicators
  const totalPages = blogPosts.length - visiblePosts + 1

  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-green-500 text-sm font-semibold mb-2 px-4 py-1 border border-green-500 rounded-full">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Blog & News</h2>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300 disabled:opacity-50"
              aria-label="Previous posts"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== activeIndex) {
                      setIsAnimating(true)
                      setActiveIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-green-500 w-8" : "bg-gray-600"
                  }`}
                  aria-label={`Go to blog page ${index + 1}`}
                  disabled={isAnimating}
                ></button>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300 disabled:opacity-50"
              aria-label="Next posts"
              disabled={isAnimating}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden" ref={slideRef}>
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * (100 / visiblePosts)}%)` }}
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="px-4 w-full md:w-1/3 flex-shrink-0"
                  style={{ transition: "all 0.5s ease" }}
                >
                  <div className="bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>By {post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <a
                          href="#"
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300"
                        >
                          LEARN MORE
                        </a>
                        <div className="flex items-center text-gray-400">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          <span>{post.comments} Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog


