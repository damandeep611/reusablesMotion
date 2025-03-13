"use client"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, X } from "lucide-react"


const plans = [
  {
    id: "free",
    name: "Free Plan",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals just getting started",
    features: ["1 user", "5 projects", "Basic analytics", "24-hour support response time"],
    buttonText: "Get Started",
    color: "bg-gray-800",
    hoverColor: "hover:bg-gray-700",
    textColor: "text-gray-800",
    borderColor: "border-gray-800",
    image: "https://img.icons8.com/color/50/user.png",
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: "$29",
    period: "per month",
    description: "Ideal for professionals and small teams",
    features: [
      "Up to 5 users",
      "Unlimited projects",
      "Advanced analytics",
      "4-hour support response time",
      "Custom reporting",
    ],
    buttonText: "Subscribe Now",
    color: "bg-emerald-600",
    hoverColor: "hover:bg-emerald-500",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-600",
    image: "https://img.icons8.com/color/50/user.png",
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    price: "$99",
    period: "per month",
    description: "For organizations with advanced needs",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "Premium analytics",
      "1-hour support response time",
      "Custom reporting",
      "Dedicated account manager",
      "API access",
    ],
    buttonText: "Contact Sales",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-500",
    textColor: "text-blue-600",
    borderColor: "border-blue-600",
    image: "https://img.icons8.com/color/50/user.png",
  },
]

export default function PricingcardReveal() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComparing, setIsComparing] = useState(false)

  const nextPlan = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % plans.length)
  }

  const prevPlan = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + plans.length) % plans.length)
  }

  const toggleCompare = () => {
    setIsComparing(!isComparing)
  }

  return (
    <div className="relative w-full my-12 mx-2 ">
      <AnimatePresence mode="wait">
        {isComparing ? (
          <motion.div
            key="compare-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="flex justify-center absolute bottom-0">
              <button
                onClick={toggleCompare}
                className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Close Comparison</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div key={plan.id} className="flex-1">
                  <PricingCard plan={plan} />
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="single-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <PricingCard plan={plans[currentIndex]} />
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevPlan}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                aria-label="Previous plan"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex gap-2">
                {plans.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
                  />
                ))}
              </div>

              <button
                onClick={nextPlan}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                aria-label="Next plan"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={toggleCompare}
                className="px-6 py-2 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
              >
                Compare All Plans
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}






// pricing card 




interface PlanProps {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  color: string
  hoverColor: string
  textColor: string
  borderColor: string
  image: string
}

interface PricingCardProps {
  plan: PlanProps
}

 function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="relative">
      {/* Circular image that's half inside, half outside the card */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[60px] w-[120px] h-[120px] z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={plan.id + "-image"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={plan.image || "/placeholder.svg"}
              alt={`${plan.name} icon`}
              fill
              className="rounded-full object-cover border-2 border-black bg-white z-10 shadow-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom card using Tailwind only */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden pt-16 h-full border border-gray-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={plan.id + "-color"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-0 left-0 right-0 h-24 ${plan.color}`}
          />
        </AnimatePresence>

        {/* Card Header */}
        <div className="text-center pt-8 px-6">
          <AnimatePresence mode="wait">
            <motion.h3
              key={plan.id + "-name"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-2xl font-bold ${plan.textColor}`}
            >
              {plan.name}
            </motion.h3>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={plan.id + "-price"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mt-2"
            >
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-500 ml-1">/{plan.period}</span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={plan.id + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-gray-600 mt-2"
            >
              {plan.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Card Content */}
        <div className="px-6 py-6">
          <AnimatePresence mode="wait">
            <motion.ul
              key={plan.id + "-features"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {plan.features.map((feature, index) => (
                <motion.li
                  key={`${plan.id}-feature-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  className="flex items-center"
                >
                  <div className={`w-4 h-4 rounded-full ${plan.color} mr-3 flex-shrink-0`} />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Card Footer */}
        <div className="px-6 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={plan.id + "-button"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="w-full"
            >
              <button
                className={`w-full py-2 px-4 rounded-md text-white ${plan.color} ${plan.hoverColor} transition-colors`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

