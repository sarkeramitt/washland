"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, User, Calendar, MessageSquare } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How To Build A Cleaning Plan",
    excerpt: "Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "10 Feb, 2023",
    author: "Admin",
    comments: 23,
  },
  {
    id: 2,
    title: "Effective Maintenance Strategies",
    excerpt: "Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d8e8d621f5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "15 Feb, 2023",
    author: "Admin",
    comments: 17,
  },
  {
    id: 3,
    title: "Sustainable Energy Solutions",
    excerpt: "Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    date: "22 Feb, 2023",
    author: "Admin",
    comments: 9,
  },
  {
    id: 4,
    title: "Renewable Energy Trends",
    excerpt: "Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    date: "28 Feb, 2023",
    author: "Admin",
    comments: 14,
  },
]

const Blog = () => {
  const [startIndex, setStartIndex] = useState(0)
  const visiblePosts = 3 // Number of posts visible at once

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (blogPosts.length - visiblePosts + 1))
  }

  const prevSlide = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + (blogPosts.length - visiblePosts + 1)) % (blogPosts.length - visiblePosts + 1),
    )
  }

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
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300"
              aria-label="Previous posts"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300"
              aria-label="Next posts"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(startIndex, startIndex + visiblePosts).map((post) => (
              <div key={post.id} className="bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

