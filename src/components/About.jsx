import { Users, DollarSign, HeadphonesIcon } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
          <span className="inline-block text-green-500 text-sm font-semibold mb-2 px-4 py-1 border border-green-500 rounded-full">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold ">All About US</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Few Reasons Why People Choosing Us!</h2>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
              et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trusted Service Center</h3>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reasonable Price</h3>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full p-4 flex-shrink-0">
                  <HeadphonesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Supports</h3>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-0">
            <img
              src="./assets/about.jpg"
              alt="Air conditioner"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

