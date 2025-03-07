"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Menu, Twitter, X } from "lucide-react";

// Navbar props 


//navigation items
const navItems = [
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "Templates",
    href: "/templates",
  },
  {
    title: "Pro",
    href: "/pro",
  },
];

export default function Navbar() {
  // state for mobile menu button
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* left navbar */}
          <nav className="flex items-center justify-between gap-8">
            {/* logo for home */}
            <div>
              <motion.div whileHover={{scale: 1.05}} transition={{type: "spring", stiffness: 200, damping: 10}} className="flex items-center cursor-pointer">
                <motion.div whileHover={{y: -2, rotate:5}} transition={{type: "spring", stiffness: 300 , damping: 15}} className="w-8 h-8 bg-indigo-600 dark:bg-indigo-300 rounded-md mr-2"/>
              <Link href="/" className="font-bold text-xl">ReuseMotion</Link>
              </motion.div>
              
            </div>
            <ul className=" hidden lg:flex items-center justify-between space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm font-medium">
                    {item.title}
                    
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* right header section with social links and a theme toggle */}
          <div className=" hidden lg:flex items-center justify-between space-x-4">
           
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <Github size={25} />
            </a>
            <a href="https://x.com" className="flex items-center" target="_blank" rel="noopener noreferrer">
              <Twitter size={25} />
            </a>
          </div>
          {/* mobile menu button */}
          <div className="flex lg:hidden">
             
              <button onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X/> : <Menu/>}
              </button>
          </div>
        </div>
        {/* Mobile menu navigation   */}
        {isMobileMenuOpen && (
          <div>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item)=> (
                <Link key={item.href} href={item.href} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white">
                {item.title}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaSquareGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaSquareXTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}