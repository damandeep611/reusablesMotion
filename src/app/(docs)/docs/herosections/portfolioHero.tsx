"use client"

import type React from "react"
import { motion } from "framer-motion"

export default function PortfolioHero () {
  // Animation variants for text reveal
  const textReveal = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  // Animation for the large KHAGWAL text
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  // Split KHAGWAL into individual letters for animation
  const khagwalLetters = "Designer".split("")

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-10 flex flex-col">
      {/* Header with navigation */}
      <header className="flex justify-between items-start">
        <div className="flex flex-col">
          <motion.h1
            className="text-xl sm:text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Dev
          </motion.h1>
          <motion.h1
            className="text-xl sm:text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Designer
          </motion.h1>

          {/* Star icon */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-[80px] sm:h-[80px]"
            >
              <path d="M40 0L48 32L80 40L48 48L40 80L32 48L0 40L32 32L40 0Z" fill="white" />
            </svg>
          </motion.div>
        </div>

        {/* Right side content */}
        <div className="flex flex-col items-end space-y-6 sm:space-y-10">
          {/* Introduction text */}
          <div className="max-w-[200px] sm:max-w-md text-right">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-sm sm:text-lg mb-1 sm:mb-2"
            >
              Hey! I am David cavier
            </motion.p>
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-sm sm:text-lg mb-1 sm:mb-2"
            >
              I specialize in human-centered design.
            </motion.p>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-sm sm:text-lg mb-1 sm:mb-2"
            >
              Crafting products grounded in insights.
            </motion.p>
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-sm sm:text-lg"
            >
              My goal is to design usable & delightful products.
            </motion.p>
          </div>

          {/* Navigation Component */}
          <Navigation />
        </div>
      </header>

      {/* Main content */}
      <div className="flex-grow flex flex-col justify-center mt-12 sm:mt-20">
        {/* Taglines */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          I bring usability & beauty closer.
        </motion.h2>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          I design for humans.
        </motion.h2>

        {/* Large KHAGWAL text with letter-by-letter reveal */}
        <div className="mt-12 sm:mt-20 md:mt-32 flex flex-wrap">
          {khagwalLetters.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}




// ------------------

import { useState } from "react"
import {  AnimatePresence } from "framer-motion"
import Link from "next/link"

interface NavigationProps {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Navigation items
  const navItems = ["Home", "Interactions", "Blog", "X"]

  // Animation variants for navigation links
  const navLinkHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  // Animation variants for menu items
  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className={`${className}`}>
      {/* Desktop Navigation - visible on screens >= 720px */}
      <nav className="hidden md:flex flex-col items-end space-y-3">
        {navItems.map((item, index) => (
          <motion.div key={item} initial="rest" whileHover="hover" variants={navLinkHover}>
            <Link href="#" className="text-lg font-medium flex items-center">
              {item === "Home" && (
                <motion.span
                  className="ml-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index + 1.5 }}
                >
                  ←
                </motion.span>
              )}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index + 1.5, duration: 0.5 }}
              >
                {item}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Mobile Menu Button - visible on screens < 720px */}
      <div className="md:hidden flex items-center">
        <motion.button
          className="flex items-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d={
                isMenuOpen
                  ? "M18 6L6 18M6 6L18 18" // X icon when menu is open
                  : "M4 6H20M4 12H20M4 18H20" // Hamburger icon when menu is closed
              }
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">MENU</span>
        </motion.button>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-8 right-8 text-white flex items-center"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium">CLOSE</span>
            </motion.button>

            {/* Mobile menu items */}
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="overflow-hidden"
                >
                  <Link href="#" className="text-4xl font-bold" onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


