"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import {
  ArrowBigRightDash,
  Atom,
  Code,
  Code2,
  Database,
  FileCode,
  Flame,
  Layers,
  LayoutGrid,
  Palette,
  Server,
  Sigma,
  Terminal,
  Waves,
  Brain,
} from "lucide-react"

// Tech stack data with Lucide icons
const topRowTech = [
  { name: "Next.js", icon: <ArrowBigRightDash className="h-4 w-4" /> },
  { name: "React.js", icon: <Atom className="h-4 w-4" /> },
  { name: "TailwindCSS", icon: <Waves className="h-4 w-4" /> },
  { name: "Bootstrap", icon: <LayoutGrid className="h-4 w-4" /> },
  { name: "C++", icon: <Code2 className="h-4 w-4" /> },
  { name: "CSS", icon: <Palette className="h-4 w-4" /> },
  { name: "C", icon: <Code className="h-4 w-4" /> },
  { name: "Python", icon: <FileCode className="h-4 w-4" /> },
  { name: "Solidity", icon: <Sigma className="h-4 w-4" /> },
]

const bottomRowTech = [
  { name: "Arch Linux", icon: <Terminal className="h-4 w-4" /> },
  { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
  { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
  { name: "Prisma", icon: <Layers className="h-4 w-4" /> },
  { name: "Node.js", icon: <Server className="h-4 w-4" /> },
  { name: "Firebase", icon: <Flame className="h-4 w-4" /> },
  { name: "Artificial Intelligence", icon: <Brain className="h-4 w-4" /> },
  { name: "Nginx", icon: <Server className="h-4 w-4" /> },
]

export default function SkillsMarquee() {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  // Clone items for seamless infinite scrolling
  const topRowItems = [...topRowTech, ...topRowTech, ...topRowTech]
  const bottomRowItems = [...bottomRowTech, ...bottomRowTech, ...bottomRowTech]

  useEffect(() => {
    // Animation for top row (right to left)
    const topRowAnimation = topRowRef.current?.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(-${100 / 3}%)` }],
      {
        duration: 30000,
        iterations: Number.POSITIVE_INFINITY,
        easing: "linear",
      },
    )

    // Animation for bottom row (left to right)
    const bottomRowAnimation = bottomRowRef.current?.animate(
      [{ transform: `translateX(-${100 / 3}%)` }, { transform: "translateX(0)" }],
      {
        duration: 25000, // Slightly faster for visual interest
        iterations: Number.POSITIVE_INFINITY,
        easing: "linear",
      },
    )

    // Pause animations when tab is not visible to save resources
    const handleVisibilityChange = () => {
      if (document.hidden) {
        topRowAnimation?.pause()
        bottomRowAnimation?.pause()
      } else {
        topRowAnimation?.play()
        bottomRowAnimation?.play()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      topRowAnimation?.cancel()
      bottomRowAnimation?.cancel()
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  // Custom tech badge component
  const TechBadge = ({
    name,
    icon,
    isTopRow = true,
  }: {
    name: string
    icon: React.ReactNode
    isTopRow?: boolean
  }) => (
    <div
      className={`
        inline-flex items-center px-4 py-2 mr-3
        ${
          isTopRow
            ? "rounded-full bg-gray-800/60 shadow-[0_4px_12px_rgba(0,200,255,0.15)]"
            : "rounded-full bg-gray-800/80 shadow-[0_4px_12px_rgba(255,150,0,0.15)]"
        }
        transition-all duration-300 hover:scale-105 hover:shadow-lg
        hover:bg-gray-700/80
      `}
    >
      <span className={`mr-2 ${isTopRow ? "text-cyan-400" : "text-amber-400"}`}>{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
  )

  return (
    <div className="w-full bg-black text-white py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Tools that I have used</h2>
        <div className="w-48 h-1 bg-cyan-400 mb-8"></div>

        {/* Top row - scrolls right to left */}
        <div className="relative overflow-hidden mb-6 py-2">
          <div ref={topRowRef} className="flex whitespace-nowrap">
            {topRowItems.map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} name={tech.name} icon={tech.icon} isTopRow={true} />
            ))}
          </div>
        </div>

        {/* Bottom row - scrolls left to right */}
        <div className="relative overflow-hidden py-2">
          <div ref={bottomRowRef} className="flex whitespace-nowrap">
            {bottomRowItems.map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} name={tech.name} icon={tech.icon} isTopRow={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

