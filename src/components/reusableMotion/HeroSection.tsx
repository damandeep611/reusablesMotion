import { motion } from "framer-motion"
import { useState } from "react";
import TechIconsHero from "./TechIconsHero";

//text reveal animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function HeroSection() {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div className=" w-full min-h-screen px-6 py-12 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between ">
      <motion.div
        className="w-full md:w-3/5 mb-12 md:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            Collection
          </motion.h1>
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            of{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              stunning
            </span>
          </motion.h1>
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            components.
          </motion.h1>
        </motion.div>

        <p className="text-lg max-w-lg  md:text-xl mb-8">
          50+ Reusable UI components built with{" "}
          <span className="text-cyan-400">Tailwind CSS</span> and{" "}
          <span className="text-pink-400">Framer Motion</span> perfect for{" "}
          <span className="">React</span> and <span className="">Next.js</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            className="flex items-center justify-center gap-2 font-medium px-6 py-3 rounded-full  transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Browse Components
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          <motion.button
            className="flex items-center justify-center gap-2 bg-transparent border  font-medium px-6 py-3 rounded-full  transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Go to Templates
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
        <TechIconsHero />
      </motion.div>

      {/* Right column */}
      <motion.div
        className="w-full md:w-2/5 flex flex-col gap-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Smaller Card */}
        <motion.div
          className="relative w-full max-w-sm mx-auto aspect-[4/3] bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full">
            New
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-full bg-black/20 relative overflow-hidden">
              <div className="absolute right-0 top-1/4 w-full h-3/4 bg-black/30"></div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-2xl font-bold mb-1">Modern Design Systems</h3>
            <p className="text-sm text-white/80 mb-4">
              Explore the fundamentals of contemporary UI design
            </p>

            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* Input Animation Component */}
        <motion.div
          className="w-full max-w-sm mx-auto bg-gray-900 rounded-3xl p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-lg mb-4">Search Commands</p>

          <div className="relative mb-6">
            <motion.div
              className="absolute inset-0 border-2 rounded-lg"
              animate={{
                borderColor: inputFocus
                  ? ["rgba(96, 165, 250, 0.5)", "rgba(236, 72, 153, 0.5)"]
                  : "rgba(55, 65, 81, 1)",
                boxShadow: inputFocus
                  ? "0 0 0 3px rgba(96, 165, 250, 0.3)"
                  : "none",
              }}
              transition={{
                duration: 1.5,
                repeat: inputFocus ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              }}
            />
            <input
              type="text"
              placeholder="What's up?"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border-transparent focus:outline-none focus:ring-0"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-3">
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800"
              whileHover={{ x: 5 }}
            >
              <div className="text-blue-400">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 8H18M6 12H18M6 16H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Book tickets</p>
              </div>
              <div className="text-gray-500 text-sm">Operator</div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800"
              whileHover={{ x: 5 }}
            >
              <div className="text-orange-500">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6H16M8 12H16M8 18H12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Summarize</p>
              </div>
              <div className="text-gray-500 text-sm">Command</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Dock Menu Button */}
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-md rounded-full p-2 flex items-center gap-3 border border-gray-700"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M12 3V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.div
            className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.div
            className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}