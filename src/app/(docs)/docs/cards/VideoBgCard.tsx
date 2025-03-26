"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Star } from "lucide-react"

export default function VideoCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ratingRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // GSAP animation for card entrance
    if (cardRef.current) {
      // Initial card animation
      gsap.fromTo(
        cardRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
      )

      // Text reveal animations with staggered timing
      const timeline = gsap.timeline({ delay: 0.5 })

      // Title reveal
      timeline.fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" })

      // Description reveal
      timeline.fromTo(
        descriptionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5", // Start slightly before previous animation ends
      )

      // Rating reveal
      timeline.fromTo(
        ratingRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5",
      )

      // Button reveal
      timeline.fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5",
      )
    }
  }, [])

  return (
    <div className="flex items-center justify-center border border-gray-200 rounded-xl ">
      <div
        ref={cardRef}
        className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl"
        style={{ aspectRatio: "3/4" }}
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source
              src="/videos/cardvid.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Card Content */}
        <div className="relative h-full flex flex-col justify-end p-6 text-white">
          <h2 ref={titleRef} className="text-2xl font-bold mb-1 opacity-0">
            Mountain Retreat
          </h2>
          <p ref={descriptionRef} className="text-sm opacity-0 mb-4">
            Luxury cabin nestled in the mountains, offering breathtaking views and a peaceful environment for ultimate
            relaxation.
          </p>

          {/* Rating */}
          <div ref={ratingRef} className="flex items-center mb-2 opacity-0">
            <span className="font-semibold mr-2">4.5</span>
            <div className="flex">
              {[1, 2, 3, 4].map((_, index) => (
                <Star key={index} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
              <Star
                className="w-4 h-4 fill-current text-yellow-400 stroke-yellow-400"
                strokeDasharray="22"
                strokeDashoffset="11"
              />
            </div>
            <span className="ml-3 text-xs px-3 py-1 bg-black/30 rounded-full">3 Night Stay</span>
          </div>

          {/* Button */}
          <button
            ref={buttonRef}
            className="w-full py-3 mt-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors opacity-0"
            onClick={() => {
              // Button animation on click
              gsap.to(buttonRef.current, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
              })
            }}
          >
            Reserve now
          </button>
        </div>
      </div>
    </div>
  )
}

