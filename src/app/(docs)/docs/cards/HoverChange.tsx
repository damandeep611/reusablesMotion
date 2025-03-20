"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Clock } from "lucide-react"

// Define types for our food items
interface FoodItem {
  id: number
  name: string
  image: string
  rating: number
  cuisines: string[]
  deliveryTime: string
  distance: string
  deliveryFee: string
}

export default function HoverChange() {
  // Sample food data
  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Restro Stand",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      rating: 4.0,
      cuisines: ["Chinese", "Shake", "Italian"],
      deliveryTime: "45-50 min",
      distance: "2km",
      deliveryFee: "Free Delivery",
    },
    {
      id: 2,
      name: "Burger House",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop",
      rating: 4.5,
      cuisines: ["American", "Fast Food", "Burgers"],
      deliveryTime: "30-35 min",
      distance: "1.5km",
      deliveryFee: "Free Delivery",
    },
    {
      id: 3,
      name: "Sweet Delights",
      image: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?q=80&w=2074&auto=format&fit=crop",
      rating: 4.8,
      cuisines: ["Desserts", "Bakery", "Pastries"],
      deliveryTime: "40-45 min",
      distance: "3km",
      deliveryFee: "$2.50 Delivery",
    },
  ]

  // State to track the active food item
  const [activeItem, setActiveItem] = useState<FoodItem>(foodItems[0])

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-300 p-4">
      <motion.div
        className="bg-white rounded-3xl overflow-hidden shadow-xl w-full max-w-md flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ height: "280px" }} // Fixed height to match original design
      >
        {/* Left side - Information */}
        <div className="w-3/5 p-5 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col"
            >
              <div className="flex items-center mb-1">
                <motion.div
                  className="bg-purple-900 text-white rounded-full px-2 py-0.5 flex items-center text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-bold mr-1">{activeItem.rating}</span>
                  <Star className="w-3 h-3 fill-white" />
                </motion.div>
              </div>

              <motion.h2
                className="text-3xl font-bold mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {activeItem.name}
              </motion.h2>

              <div className="border-t border-gray-200 my-1"></div>

              <motion.div
                className="flex flex-wrap gap-1 mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {activeItem.cuisines.map((cuisine, index) => (
                  <div key={index} className="flex items-center text-gray-500 text-sm">
                    <span className="text-gray-400 mr-1">•</span>
                    <span>{cuisine}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex items-center mb-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div
                  className="bg-orange-100 p-1 rounded mr-2 flex items-center justify-center"
                  style={{ width: "24px", height: "24px" }}
                >
                  <Clock className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-gray-600">
                  {activeItem.deliveryTime} • {activeItem.distance}
                </span>
              </motion.div>

              <motion.div
                className="text-orange-500 font-semibold text-lg mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {activeItem.deliveryFee}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side - Images */}
        <div className="w-2/5 flex flex-col gap-2 p-3">
          {foodItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative h-1/3 rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setActiveItem(item)}
              transition={{ duration: 0.2 }}
              style={{ height: "80px" }} // Fixed height for each image container
            >
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

