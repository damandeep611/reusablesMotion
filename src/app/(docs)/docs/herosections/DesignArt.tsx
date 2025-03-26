'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'



// Assume FocusedImage component is defined elsewhere
const FocusedImage = ({ imageUrl, onClose }: { imageUrl: string; onClose: () => void }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <Image src={imageUrl} alt="" width={800} height={600} className="rounded-xl" />
    </div>
  );
};


export default function DesignArt() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const menuItems = [
    { id: '01', title: 'STUDIO' },
    { id: '02', title: 'MIXER', subtitle: 'explore' },
    { id: '03', title: 'OBJECTS' },
    { id: '04', title: 'DELTA' },
    { id: '05', title: 'EXPRESS' }
  ]

  const imageCards = [
    {
      url: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 400,
      height: 300,
      top: '15%',
      left: '10%',
      rotate: -5
    },
    {
      url: 'https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 280,
      height: 420,
      top: '35%',
      left: '65%',
      rotate: 3
    },
    {
      url: 'https://images.pexels.com/photos/4944678/pexels-photo-4944678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 350,
      height: 350,
      top: '60%',
      left: '25%',
      rotate: 8
    },
    {
      url: 'https://images.pexels.com/photos/4944674/pexels-photo-4944674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      width: 450,
      height: 280,
      top: '20%',
      left: '40%',
      rotate: -7
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 p-6 flex justify-between items-center"
      >
        <Link href="/" className="text-xl font-medium">
          Lupinus
        </Link>
        <nav className="space-x-6">
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
        </nav>
      </motion.header>

      {/* Background Image Cards */}
      <div className="absolute inset-0 z-10">
        {imageCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: hoveredIndex === index ? 0.4 : hoveredIndex === null ? 0.2 : 0.1,
              scale: hoveredIndex === index ? 1.1 : hoveredIndex === null ? 1 : 0.95,
              rotate: card.rotate
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{
              width: card.width,
              height: card.height,
              top: card.top,
              left: card.left,
              position: 'absolute'
            }}
            onClick={() => setSelectedItem(index)}
          >
            <div className="relative w-full h-full">
              <Image
                src={card.url}
                alt=""
                fill
                className="object-cover rounded-2xl"
                sizes={`(max-width: ${card.width}px) 100vw, ${card.width}px`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-20 min-h-screen flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          {selectedItem === null ? (
            <div className="space-y-12 px-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    className="text-sm mb-2 opacity-60"
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
                  >
                    {item.id}
                  </motion.div>
                  <motion.button 
                    className="text-5xl md:text-7xl font-bold tracking-wider relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.button>
                  {item.subtitle && (
                    <motion.div 
                      className="text-sm mt-2 opacity-60"
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
                    >
                      {item.subtitle}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <FocusedImage
              key="focused-image"
              imageUrl={imageCards[selectedItem].url}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-0 w-full z-50 p-6 flex justify-between items-center"
      >
        <div className="max-w-xs text-sm opacity-60">
          Transform content, code, images, and websites on demand with DIVI AI.
        </div>
        <div className="space-x-6 text-sm">
          <Link href="/demo" className="hover:opacity-100 opacity-60 transition-opacity">previous demo</Link>
          <Link href="/article" className="hover:opacity-100 opacity-60 transition-opacity">article</Link>
          <Link href="/github" className="hover:opacity-100 opacity-60 transition-opacity">github</Link>
        </div>
      </motion.footer>
    </div>
  )
}

