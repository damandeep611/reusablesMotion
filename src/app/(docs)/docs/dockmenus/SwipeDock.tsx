"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { Home, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

export default function SwipeDock() {
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/docs/dockmenus"

  // Motion values for drag interaction
  const x = useMotionValue(0);

  // Transform x motion value to opacity for labels
  const leftLabelOpacity = useTransform(x, [-50, -20, 0], [1, 0.8, 0])
  const rightLabelOpacity = useTransform(x, [0, 20, 50], [0, 0.8, 1])

  // Transform for scale on drag
  const scale = useTransform(x, [-100, -50, 0, 50, 100], [0.8, 0.9, 1, 0.9, 0.8])

  const [isDragging, setIsDragging] = useState(false)
  const [showOnMobile, setShowOnMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setShowOnMobile(window.innerWidth < 2100)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle navigation based on drag direction
  const handleDragEnd = () => {
    setIsDragging(false)
    const xValue = x.get()

    if (isHomePage) {
      if (xValue < -50) {
        router.push("/")
      } else if (xValue > 50) {
        router.push("/")
      }
    }

    // Reset position
    x.set(0)
  }

  // Handle click for non-home pages
  const handleClick = () => {
    if (!isHomePage) {
      router.push("/")
    }
  }

  if (!showOnMobile) return null

  return (
    <div className=" flex justify-center items-center z-50 pointer-events-none ">
      <div className="relative flex items-center justify-center pointer-events-auto">
        {/* Left Label (About) */}
        <AnimatePresence>
          {isDragging && isHomePage && (
            <motion.div
              className="absolute right-16 text-sm font-medium text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md"
              style={{ opacity: leftLabelOpacity }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              About
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg"
          whileTap={{ scale: 0.95 }}
          drag={isHomePage ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x, scale }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          onClick={handleClick}
          animate={{
            boxShadow: [
              "0 4px 6px rgba(0, 0, 0, 0.1)",
              "0 4px 15px rgba(0, 0, 0, 0.2)",
              "0 4px 6px rgba(0, 0, 0, 0.1)",
            ],
          }}
          transition={{
            boxShadow: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            },
          }}
        >
          {isHomePage ? (
            <>
              <Home className="w-6 h-6" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary-foreground/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </>
          ) : (
            <ArrowLeft className="w-6 h-6" />
          )}
        </motion.button>

        {/* Right Label (Blog) */}
        <AnimatePresence>
          {isDragging && isHomePage && (
            <motion.div
              className="absolute left-16 text-sm font-medium text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md"
              style={{ opacity: rightLabelOpacity }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              Blog
            </motion.div>
          )}
        </AnimatePresence>

        {/* Direction Indicators (only on home page) */}
        {isHomePage && (
          <>
            <motion.div
              className="absolute -left-8 text-primary/50"
              animate={{ x: [-2, 0, -2], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.div>
            <motion.div
              className="absolute -right-8 text-primary/50"
              animate={{ x: [2, 0, 2], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

