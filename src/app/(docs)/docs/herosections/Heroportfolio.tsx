'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Github, Briefcase, LinkedinIcon, User, Home, Code, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroPortolio() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
  }
  
  interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
  }

  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const createParticle = (): Particle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 10 + 5,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
    });

    setParticles(Array.from({ length: 100 }, createParticle));

    const interval = setInterval(() => {
      setParticles((prevParticles: Particle[]) =>
        prevParticles.map((particle: Particle) => ({
          ...particle,
          x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'About', href: '/about' },
    { icon: Briefcase, label: 'Projects', href: '/projects' },
    { icon: GraduationCap, label: 'Education', href: '/education' },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-blue-900 text-blue-50">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-300 opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: (particle.x + particle.speedX * 100 + window.innerWidth) % window.innerWidth,
            y: (particle.y + particle.speedY * 100 + window.innerHeight) % window.innerHeight,
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <AnimatePresence>
        {isNavOpen && (
          <motion.nav
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute bottom-0 left-0 right-0 z-50 bg-blue-800 shadow-lg"
          >
            <div className="container mx-auto flex justify-around p-4">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="flex flex-col items-center text-blue-200 hover:text-blue-50">
                  <item.icon size={24} />
                  <span className="mt-1 text-xs">{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="container relative mx-auto px-4 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-[2fr,1fr,1fr] lg:grid-cols-[3fr,1fr,1fr]"
        >
          <motion.div variants={item} className="space-y-6 rounded-xl bg-blue-800/50 p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative h-16 w-16 overflow-hidden rounded-full"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Hi, I&apos;m Chris Alonzo.
                </h1>
                <p className="text-xl text-blue-200">
                  Sales Representative Turned Code Maestro
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button  className="group border-blue-400 text-blue-50 hover:bg-blue-700">
                About me{' '}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-1"
                >
                  →
                </motion.span>
              </button>
              <button className="bg-blue-600 text-blue-50 hover:bg-blue-500">Resume</button>
            </div>
          </motion.div>

          <motion.div variants={item} className="grid gap-4 md:col-span-2 lg:grid-cols-2">
            <Link href="https://linkedin.com" className="group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex h-full items-center justify-center rounded-xl bg-[#0077B5] p-8 transition-colors"
              >
                <LinkedinIcon size={48} className="text-blue-50 transition-transform group-hover:scale-110" />
              </motion.div>
            </Link>

            <Link href="https://github.com" className="group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex h-full items-center justify-center rounded-xl bg-blue-800/50 p-8 transition-colors hover:bg-blue-700/50 backdrop-blur-sm"
              >
                <Github size={48} className="text-blue-50 transition-transform group-hover:scale-110" />
              </motion.div>
            </Link>

            <Link href="/projects" className="group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex h-full items-center justify-center rounded-xl bg-emerald-600 p-8 transition-colors"
              >
                <Briefcase size={48} className="text-blue-50 transition-transform group-hover:scale-110" />
              </motion.div>
            </Link>

            <Link href="/education" className="group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex h-full items-center justify-center rounded-xl bg-red-600 p-8 transition-colors"
              >
                <GraduationCap size={48} className="text-blue-50 transition-transform group-hover:scale-110" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 rounded-xl bg-blue-800/50 p-8 backdrop-blur-sm"
        >
          <p className="text-xl">
            <span className="font-bold">I build things that solve problems.</span>{' '}
            <span className="text-blue-200">
              I&apos;m a full-stack developer and entrepreneur who&apos;s passionate about creating solutions. 
              Proficient in both front-end and back-end, bringing creative ideas to code.
            </span>
          </p>
        </motion.div>
      </main>

      <motion.button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="absolute bottom-4 left-1/2 z-50 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-blue-50 shadow-lg hover:bg-blue-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isNavOpen ? (
            <motion.div
              key="chevron"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUp size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Code size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}