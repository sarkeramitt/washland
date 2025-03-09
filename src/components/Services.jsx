import { Car as Car, CarFront, Droplets, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    icon: <Car className="w-10 h-10 text-green-500" />,
    title: "Exterior Shine",
    description: "Thorough hand wash and polish for a gleaming finish.",
    image:
      "./assets/service-1.jpg",
  },
  {
    id: 2,
    icon: <CarFront className="w-10 h-10 text-green-500" />,
    title: "Interior Detail",
    description: "Deep cleaning of seats, carpets, and dashboard surfaces.",
    image:
      "./assets/service-2.jpg",
  },
  {
    id: 3,
    icon: <Droplets className="w-10 h-10 text-green-500" />,
    title: "Wheel Care",
    description: "Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
    image:
      "./assets/service-3.jpg",
  },
  {
    id: 4,
    icon: <Car className="w-10 h-10 text-green-500" />,
    title: "Window Clarity",
    description: "Streak-free window cleaning, inside and out",
    image:
      "./assets/service-4.jpg",
  },
  {
    id: 5,
    icon: <CarFront className="w-10 h-10 text-green-500" />,
    title: "Wax Protection",
    description: "Application of protective wax to enhance paint longevity.",
    image:
      "./assets/service-5.jpg",
  },
  {
    id: 6,
    icon: <Droplets className="w-10 h-10 text-green-500" />,
    title: "Engine Bay",
    description: "Cleaning and degreasing of the engine compartment.",
    image:
      "./assets/service-6.jpg",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-green-500 text-sm font-semibold mb-2 px-4 py-1 border border-green-500 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold ">We Are Pioneers In The World <br/> Of Renewable Energy</h2>
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
              <p className="mb-4">{service.description}</p>
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

