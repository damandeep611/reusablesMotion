"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface Person {
  image: string
  name: string
  role: string
  contact: string
}

const people: Person[] = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Smith",
    role: "Founder & CEO",
    contact: "@johnsmith",
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Sarah Johnson",
    role: "CTO",
    contact: "@sarahj",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Chen",
    role: "Lead Developer",
    contact: "@mikechen",
  },
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emma Wilson",
    role: "Product Manager",
    contact: "@emmaw",
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "David Kim",
    role: "Design Lead",
    contact: "@davidk",
  },
  {
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Lisa Anderson",
    role: "Marketing Director",
    contact: "@lisaa",
  },
  {
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Taylor",
    role: "Senior Engineer",
    contact: "@jamest",
  },
  {
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Rachel Lee",
    role: "UX Designer",
    contact: "@rachell",
  },
]

export default function TeamHover() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-black text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center text-lg md:text-xl mb-12 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Founders and Entrepreneurs from all over the world
        </motion.h2>

        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
            {people.map((person, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.img
                  src={person.image}
                  alt={person.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-800 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 rounded-lg p-4 shadow-xl w-48 z-10"
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 transform rotate-45" />
                      <div className="relative">
                        <p className="font-medium text-white text-sm">{person.name}</p>
                        <p className="text-gray-400 text-xs mt-1">{person.role}</p>
                        <p className="text-blue-400 text-xs mt-2">{person.contact}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

