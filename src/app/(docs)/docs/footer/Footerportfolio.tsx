"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Footerportfolio() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium">Markinson new</h2>
            </div>

            {/* Star Icon */}
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute w-12 h-12 bg-white rounded-full transform rotate-45"
                whileHover={{ scale: 1.1, rotate: 55 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full left-0 top-0"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-white rounded-full left-16 top-2"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Taglines */}
            <div className="space-y-2">
              <motion.h3
                className="text-4xl md:text-5xl lg:text-6xl font-light"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I bring usability & beauty closer.
              </motion.h3>
              <motion.h3
                className="text-4xl md:text-5xl lg:text-6xl font-light"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I design for Efficiency.
              </motion.h3>
            </div>

            {/* Large Name */}
            <motion.div className="pt-8" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter">Developer</h1>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between">
            {/* Bio Section */}
            <div className="space-y-4 max-w-md ml-auto">
              <motion.p className="text-xl" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                Hey!  Markinson new
              </motion.p>
              <motion.p className="text-xl" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                I specialize in human-centered design.
              </motion.p>
              <motion.p className="text-xl mt-6" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                Crafting products grounded in insights.
              </motion.p>
              <motion.p className="text-xl" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                My goal is to design usable & delightful products.
              </motion.p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-3 mt-12 text-right">
              <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.2 }}>
                <Link href="/" className="text-xl flex items-center justify-end gap-2">
                  Home <span className="transform rotate-180">←</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.2 }}>
                <Link href="/interactions" className="text-xl">
                  Interactions
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.2 }}>
                <Link href="/blog" className="text-xl">
                  Blog
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.2 }}>
                <Link href="https://twitter.com/username" className="text-xl">
                  X
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

