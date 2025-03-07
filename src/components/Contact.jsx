"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"


const locations = [
  {
    id: 1,
    title: "Car Washing Point",
    address: "123 Street, New York, USA",
    phone: "+012 345 6789",
  },
  {
    id: 2,
    title: "Car Washing Point",
    address: "123 Street, New York, USA",
    phone: "+012 345 6789",
  },
  {
    id: 3,
    title: "Car Washing Point",
    address: "123 Street, New York, USA",
    phone: "+012 345 6789",
  },
  {
    id: 4,
    title: "Car Washing Point",
    address: "123 Street, New York, USA",
    phone: "+012 345 6789",
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      const result = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "YOUR_USER_ID",
      )

      setStatus({
        submitted: true,
        success: true,
        message: "Your message has been sent successfully!",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: "There was an error sending your message. Please try again.",
      })
    } finally {
      setLoading(false)

      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          success: false,
          message: "",
        })
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">WASHING POINTS</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-2"></div>
          <h3 className="text-3xl md:text-5xl font-bold mt-4">Car Washing & Care Points</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div key={location.id} className="flex flex-col">
                <div className="flex items-start mb-2">
                  <MapPin className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl">{location.title}</h4>
                    <p className="text-gray-400">{location.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">Call:</span>
                  <a href={`tel:${location.phone}`} className="text-green-500 hover:underline">
                    {location.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-500 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Request for a car wash</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 bg-green-600 text-white placeholder-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 bg-green-600 text-white placeholder-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Description"
                  rows="5"
                  className="w-full p-3 bg-green-600 text-white placeholder-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex justify-center items-center"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>

              {status.submitted && (
                <div className={`mt-4 p-3 rounded-lg ${status.success ? "bg-green-700" : "bg-red-600"}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

