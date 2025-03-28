"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MainIcon from "../logos/Icons-main";
import ThemeButton from "./ThemeButton";

// Navbar props

//navigation items
const navItems = [
  {
    title: "Components",
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" flex items-center justify-center w-full px-4 pt-2 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full rounded-xl  px-4 py-2 shadow-xs border border-zinc-200 dark:border-zinc-800">
        {/* left navbar */}
        <nav className="flex items-center justify-between gap-8">
          {/* logo for home */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="flex items-center justify-between gap-1 cursor-pointer"
            >
              <MainIcon />
              <Link href="/" className="font-bold text-xl ">
                ReuseMotion
              </Link>
            </motion.div>
          </div>
          <ul className="hidden lg:flex items-center justify-between space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm  ">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* right header section with social links and a theme toggle */}
        <div className="hidden lg:flex items-center justify-between space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://x.com"
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={20} />
          </a>
          <ThemeButton />
        </div>
        {/* mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="dark:text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu navigation */}
        {isMobileMenuOpen && (
          <div>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300"
                >
                  <FaGithub />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300"
                >
                  <FaTwitter />
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