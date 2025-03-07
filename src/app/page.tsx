import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { ReactLogo } from "@/components/logos/react-logo";
import { TailwindLogo } from "@/components/logos/tailwind-logo";
import { FramerMotionLogo } from "@/components/logos/framer-logo";
import { TypeScriptLogo } from "@/components/logos/typescript-logo";

export default function HeroLanding() {
  return (
    <section className=" relative min-h-screen flex flex-col justify-center items-center overflow-hidden ">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center mb-8  border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"
          >
            <span className=" font-medium text-sm flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4h16v16H4V4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              New! Cult UI Pro Blocks <ArrowRight size={14} className="ml-1" />
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold  mb-2">
              Components crafted for
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">
              Design Engineers
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 space-y-3"
          >
            <p className="text-lg  flex items-center justify-center gap-2">
              Ready-to-use <ReactLogo size={30} />
              components for your react apps.
              <span className="inline-flex items-center ml-1">/</span>
            </p>
            <p className="text-lg  flex items-center justify-center gap-2">
              Styled with tailwindcss <TailwindLogo /> and Framer motion{" "}
              <FramerMotionLogo /> . Copy and paste, open source, typed{" "}
              <TypeScriptLogo size={24} />.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-900 text-white rounded-md font-medium"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white border text-gray-900 border-gray-200  dark:border-gray-100 rounded-md font-medium flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
