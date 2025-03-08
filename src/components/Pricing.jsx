import { Check, X } from "lucide-react"

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: 60,
    period: "/mo",
    description: "Basic Pest Control",
    features: [
      { name: "Household pests Control", included: true },
      { name: "Rodent Control", included: true },
      { name: "Re-Service at No-Charge", included: true },
      { name: "Termite Control", included: false },
      { name: "Mosquito Reduction", included: false },
    ],
    popular: false,
    color: "yellow-500",
  },
  {
    id: 2,
    name: "Standard",
    price: 80,
    period: "/mo",
    description: "Standard Pest Control",
    features: [
      { name: "Household pests Control", included: true },
      { name: "Rodent Control", included: true },
      { name: "Re-Service at No-Charge", included: true },
      { name: "Termite Control", included: true },
      { name: "Mosquito Reduction", included: false },
    ],
    popular: true,
    color: "black",
  },
  {
    id: 3,
    name: "Premium",
    price: 120,
    period: "/mo",
    description: "Premium Pest Control",
    features: [
      { name: "Household pests Control", included: true },
      { name: "Rodent Control", included: true },
      { name: "Re-Service at No-Charge", included: true },
      { name: "Termite Control", included: true },
      { name: "Mosquito Reduction", included: true },
    ],
    popular: false,
    color: "yellow-500",
  },
]

const Pricing = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-transparent border border-green-500 text-green-500 px-4 py-1 rounded-full text-sm font-semibold mb-2">
            Our Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Affordable Pricing Plan For Pest Control Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular ? "bg-black text-white" : "bg-green-500 text-white"
              }`}
            >
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-lg ml-1">{plan.period}</span>
                </div>
                <p className="mb-6">{plan.description}</p>
              </div>

              <div className={`p-8 ${plan.popular ? "bg-gray-900 dark:bg-gray-800" : "bg-gray-800 text-white"}`}>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      )}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full mt-8 py-3 rounded-md font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-black hover:bg-green-600 text-white"
                  }`}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

