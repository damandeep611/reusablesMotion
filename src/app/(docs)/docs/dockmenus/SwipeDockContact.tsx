"use client"

import { useMotionValue, useTransform } from "framer-motion";
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, ChevronUp, Home, Send, X } from "lucide-react";

export default function SwipeDockContact(){
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/docs/dockmenus"

  //motion value for drag interactions 
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  //transform x motion value to opacity for labels 
  const leftLabelOpacity = useTransform(x, [-50, -20, 0], [1, 0.8, 0]);
  const rightLabelOpacity = useTransform(x, [0, 20, 50], [0, 0.8, 1]);
  const upLabelOpacity  = useTransform(y, [-50, -20, 0], [1, 0.8, 0]);

  //transform for scale on drag 
  const scale = useTransform(x, [-100, -50, 0, 50, 100], [0.8, 0.9, 1, 0.9, 0.8]);

  const [isDragging, setIsDragging] = useState(false);
  const [showOnMobile, setShowOnMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [showContactCard, setShowContactCard] = useState(false);

  //timeout ref for touch instructions 
  const touchTimeoutRef = useRef<NodeJS.Timeout>(null);

  //check if we're on mobile 
  useEffect(()=> {
    const checkMobile = ()=> {
      setShowOnMobile(window.innerWidth < 1800)
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return ()=> window.removeEventListener("resize", checkMobile)
  },[])

  //handle navigation based on drag direction 
  const handleDragEnd  = ()=> {
    setIsDragging(false);
    const xValue = x.get();
    const yValue = y.get();

    if(isHomePage){
      if(xValue < -50){
        router.push("/");
      }else if(xValue > 50){
        router.push("/");
      }else if(yValue < -50){
        //show contact card on upward swipe
        setShowContactCard(true)
      }
    }
    //reset positions 
    x.set(0);
    y.set(0);
  }

  //handle click for non home pages 
  const handleClick =()=> {
    if(!isHomePage){
      router.push("/docs/dockmenus")
    }
  }

  //handle touch start 
  const handleTouchStart = ()=> {
    setIsTouching(true)

    //clear any existing timeout 
    if(touchTimeoutRef.current){
      clearTimeout(touchTimeoutRef.current)
    }
    //set a timeout to hide the touch instructions after 3 seconds 
    touchTimeoutRef.current = setTimeout(()=> {
      setIsTouching(false);
    },3000)
  }

  //handle touch end 
  const handleTouchEnd = ()=> {
    //clear the timeout 
    if(touchTimeoutRef.current){
      clearTimeout(touchTimeoutRef.current)
    }
    //hide touch instructions after a short delay 
    touchTimeoutRef.current = setTimeout(()=> {
      setIsTouching(false)
    },500)
  }

  //close contact card 
  const closeContactCard = ()=> {
    setShowContactCard(false)
  }

  if(!showOnMobile) return null  

  return(
    <>
      <div className=" flex justify-center items-center z-50 pointer-events-none py-24">
        <div className="relative flex items-center justify-center pointer-events-auto">
          {/* Instruction Labels (visible on hover/touch) */}
          <AnimatePresence>
            {(isHovering || isTouching) && isHomePage && !isDragging && !showContactCard && (
              <>
                <motion.div
                  className="absolute -top-16 text-xs font-medium text-primary bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  Swipe up for Contact
                </motion.div>
                <motion.div
                  className="absolute -left-32 text-xs font-medium text-primary bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                >
                  Swipe left for About
                </motion.div>
                <motion.div
                  className="absolute -right-32 text-xs font-medium text-primary bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  Swipe right for Blog
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Left Label (About) - during drag */}
          <AnimatePresence>
            {isDragging && isHomePage && x.get() < -10 && (
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

          {/* Up Label (Contact) - during drag */}
          <AnimatePresence>
            {isDragging && isHomePage && y.get() < -10 && (
              <motion.div
                className="absolute -top-12 text-sm font-medium text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md"
                style={{ opacity: upLabelOpacity }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Contact
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg"
            whileTap={{ scale: 0.95 }}
            drag={isHomePage ? true : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            style={{ x, y, scale }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onClick={handleClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
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

          {/* Right Label (Blog) - during drag */}
          <AnimatePresence>
            {isDragging && isHomePage && x.get() > 10 && (
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
          {isHomePage && !showContactCard && (
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
              <motion.div
                className="absolute -top-8 text-primary/50"
                animate={{ y: [-2, 0, -2], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ChevronUp className="w-5 h-5" />
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Contact Card */}
      <AnimatePresence>{showContactCard && <ContactCard onClose={closeContactCard} />}</AnimatePresence>
    </>
  )
}


// contact card to show on up swipe 



interface ContactCardProps {
  onClose: () => void
}

 function ContactCard({ onClose }: ContactCardProps) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    // Simulate sending
    setTimeout(() => {
      setIsSending(false)
      setIsSent(true)

      // Reset form after showing success
      setTimeout(() => {
        setEmail("")
        setMessage("")
        setIsSent(false)
      }, 2000)
    }, 1500)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[90%] max-w-md rounded-xl bg-blue-600 text-white p-6 shadow-xl"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-blue-700 transition-colors"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">Contact Us</h2>

        {isSent ? (
          <motion.div
            className="flex flex-col items-center justify-center py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
            >
              <Send className="w-8 h-8" />
            </motion.div>
            <p className="text-center font-medium">Message sent successfully!</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-blue-700 rounded-md border border-blue-400 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-blue-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-blue-700 rounded-md border border-blue-400 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-blue-300 min-h-[100px] resize-none"
                placeholder="Type your message here..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-2 px-4 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
            >
              {isSending ? (
                <motion.div
                  className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}
