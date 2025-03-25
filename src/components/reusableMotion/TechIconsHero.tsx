import { useEffect, useRef } from "react"
import gsap from "gsap";
import { SiFramer, SiGreensock, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function TechIconsHero(){
  const iconsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(()=> {
    if(!iconsContainerRef.current) return
    const icons = iconsContainerRef.current.querySelectorAll(".tech-icon");

    icons.forEach((icon, index)=> {
      //floating animation for each icon
      gsap.to(icon, {
        y: -15,
        duration: 2 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3
      })

      //roation for more floating animation
      gsap.to(icon, {
        rotate: index % 2 === 0 ? 5 : -5,
        duration: 3 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      })
    })
  },[])
  return(
    <div className="relative mt-10">
      {/* Icons floating on waves */}
      <div ref={iconsContainerRef} className=" z-10 flex gap-8 px-2">
        <div className="tech-icon flex flex-col items-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <SiTailwindcss className="w-10 h-10 text-[#38BDF8]" />
          </div>
          <span className=" font-medium">TailwindCSS</span>
        </div>

        <div className="tech-icon flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#FFBE0B] flex items-center justify-center mb-2">
            <SiFramer className="w-10 h-10" />
          </div>
          <span className=" font-medium">Framer</span>
        </div>

        <div className="tech-icon flex flex-col items-center">
          <div className="w-16 h-16 rounded-full  border-2  flex items-center justify-center mb-2">
            <SiNextdotjs className="w-10 h-10 " />
          </div>
          <span className="font-medium">Next.js</span>
        </div>

        <div className="tech-icon flex flex-col items-center">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-2">
            <SiReact className="w-10 h-10 text-[#61DAFB]" />
          </div>
          <span className=" font-medium">React</span>
        </div>

        <div className="tech-icon flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#88CE02] flex items-center justify-center mb-2">
            <SiGreensock className="w-10 h-10 " />
          </div>
          <span className=" font-medium">GSAP</span>
        </div>
      </div>
    </div>
  )
}