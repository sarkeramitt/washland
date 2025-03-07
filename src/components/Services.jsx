import { CloudSunIcon as SolarPanel, Wind, Droplets, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    icon: <SolarPanel className="w-10 h-10 text-green-500" />,
    title: "Solar Panels",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
  },
  {
    id: 2,
    icon: <Wind className="w-10 h-10 text-green-500" />,
    title: "Wind Turbines",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    icon: <Droplets className="w-10 h-10 text-green-500" />,
    title: "Hydropower Plants",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    icon: <SolarPanel className="w-10 h-10 text-green-500" />,
    title: "Solar Panels",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
  },
  {
    id: 5,
    icon: <Wind className="w-10 h-10 text-green-500" />,
    title: "Wind Turbines",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    icon: <Droplets className="w-10 h-10 text-green-500" />,
    title: "Hydropower Plants",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-green-500 text-sm font-semibold mb-2">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold">We Are Pioneers In The World Of Renewable Energy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-green-500 text-white p-3 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
                <div className="absolute bottom-4 left-4 bg-gray-900 rounded-full p-3">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors duration-300"
              >
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

