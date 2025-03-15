"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// data for pricing cards

const plans = [
  {
    id: "free",
    name: "Free Plan",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals just getting started",
    features: [
      "1 User",
      "5 Projects",
      "Basic analytics",
      "24 hour support response time",
    ],
    buttonText: "Get Started",
    color: "bg-gray-800",
    hoverColor: "hover:bg-gray-700",
    textColor: "text-gray-800",
    borderColor: "border-gray-800",
    image: "https://cdn-icons-png.flaticon.com/512/6941/6941697.png",
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: "$29",
    period: "per month",
    description: "Ideal for professionals and small teams",
    features: [
      "Up to 5 users",
      "Unlimited Projects",
      "Advanced analytics",
      "4 hour support response time",
      "Custom reporting",
    ],
    buttonText: "Subscription Now",
    color: "bg-emerald-600",
    hoverColor: "hover:bg-emerald-500",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-600",
    image: "https://cdn-icons-png.flaticon.com/512/6941/6941669.png",
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
    image: "https://cdn-icons-png.flaticon.com/512/6941/6941631.png",
  },
];

export default function PricingCardReveal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComparing, setIsComparing] = useState(false);

  const nextPlan = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };
  const prevPlan = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + plans.length) % plans.length
    );
  };

  const toggleCompare = () => {
    setIsComparing(!isComparing);
  };
  return (
    <div className="relative w-full">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {plans.map((plan) => (
                <div key={plan.id} className="flex-1">
                  <PricingCard plan={plan} />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={toggleCompare}
                className="px-6 py-2 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
              >
                Close Comparison
              </button>
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
                className="flex items-center w-10 h-10 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                aria-label="previous plan"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {plans.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextPlan}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                aria-label="Next plan"
              >
                <ChevronRight className="h-5 w-5" />
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
  );
}

interface PlanProps {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  color: string;
  hoverColor: string;
  textColor: string;
  borderColor: string;
  image: string;
}

interface PricingCardProps {
  plan: PlanProps;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div className="relative mt-16">
      {/* pricing card img */}
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
            <div className="absolute inset-0 rounded-full bg-white shadow-lg flex items-center justify-center p-4 border-4 border-white">
              <Image
                src={plan.image || "placeholder.svg"}
                alt={`${plan.name} icon`}
                width={80}
                height={80}
                className={`rounded-full object-cover border-2 shadow-md`}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* card content main */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden pt-16 h-full border border-gray-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={plan.id + "-color"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-0 left-0 right-0 h-28 ${plan.color}`}
          ></motion.div>
        </AnimatePresence>

        {/* card header */}
        <div className="text-center pt-16 px-8">
          <AnimatePresence>
            <motion.h3
              key={plan.id + "name"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-2xl font-bold ${plan.textColor}`}
            >
              {plan.name}
            </motion.h3>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              key={plan.id + "-price"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mt-3"
            >
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-500 ml-1 text-sm">
                / {plan.period}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.p
              key={plan.id + "-desc"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-gray-600 mt-3 text-sm"
            >
              {plan.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* divider */}
        <div className="w-full h-px bg-gray-200 my-6" />
        {/* card content */}
        <div className="px-8 py-4">
          <AnimatePresence mode="wait">
            <motion.ul key={plan.id + "-feature"} className="space-y-4 py-6">
              {plan.features.map((feature, index) => (
                <motion.li
                  key={`${plan.id}-feature-${index}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center "
                >
                  <div className={` mr-3 ${plan.color} rounded-full p-1`}>
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* card footer */}
        <div className="px-6 pb-6">
          <AnimatePresence>
            <motion.div
              key={plan.id + "-button"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="w-full"
            >
              <button
                className={`w-full py-3 px-4 rounded-lg text-white font-medium ${plan.color} ${plan.hoverColor} transition-colors shadow-md`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
