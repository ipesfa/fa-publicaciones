"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Tilt } from "@/components/ui/tilt"
import { Spotlight } from "@/components/ui/spotlight"

export function ChoiceCards() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="publicaciones" className="py-32 px-6 bg-sage-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* FA Revista Card */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
          >
            <Tilt
              rotationFactor={8}
              isRevese
              springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
              className="group relative overflow-hidden bg-blue-100/50 backdrop-blur-sm border border-blue-300/40 transition-all duration-700 hover:bg-blue-100/70 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-300/30"
              style={{ 
                transformOrigin: 'center center',
              }}
            >
              {/* Spotlight effect */}
              <Spotlight
                className='z-10 from-blue-200/60 via-blue-100/30 to-blue-200/20 blur-2xl'
                size={248}
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
              />
              
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-blue-200/30"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23000000%22 fillOpacity%3D%220.03%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
              </div>

              <div className="relative p-12 md:p-16 h-full flex flex-col justify-between min-h-[400px]">
                {/* Logo area */}
                <div className="mb-8">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center bg-blue-200/30 group-hover:bg-blue-200/40 transition-all duration-500 rounded-lg">
                    <img 
                      src="/logos/fa-revista-logo.png" 
                      alt="FA Revista" 
                      className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h2 className="font-neue-machina text-4xl md:text-5xl font-normal text-deep-black mb-4 tracking-tight leading-tight group-hover:text-deep-black transition-colors duration-500">
                    Revista
                  </h2>
                  <p className="font-neue-machina text-base text-deep-black/70 leading-relaxed font-light max-w-sm group-hover:text-deep-black transition-colors duration-500">
                    Navega la producción académica institucional desde sus inicios hasta la actualidad
                  </p>
                </div>

                {/* Button area */}
                <div className="flex items-center justify-between">
                  <Link
                    href="https://revista-institucional.vercel.app/"
                    className="group/btn inline-flex items-center text-deep-black hover:text-deep-black transition-all duration-300 focus:outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-neue-machina text-sm tracking-[0.15em] uppercase font-light mr-4 group-hover/btn:mr-6 transition-all duration-300">
                      Explorar
                    </span>
                    <div className="w-8 h-8 border border-deep-black/40 rounded-full flex items-center justify-center group-hover/btn:border-deep-black group-hover/btn:bg-deep-black/5 transition-all duration-300">
                      <svg
                        className="w-3 h-3 text-deep-black group-hover/btn:translate-x-0.5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>

                  {/* Subtle indicator */}
                  <div className="w-2 h-2 rounded-full bg-deep-black/20 group-hover:bg-deep-black/40 transition-all duration-500"></div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </Tilt>
          </div>

          {/* FA Editorial Card */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
          >
            <Tilt
              rotationFactor={8}
              isRevese
              springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
              className="group relative overflow-hidden bg-amber-100/50 backdrop-blur-sm border border-amber-300/40 transition-all duration-700 hover:bg-amber-100/70 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-300/30"
              style={{ 
                transformOrigin: 'center center',
              }}
            >
              {/* Spotlight effect */}
              <Spotlight
                className='z-10 from-amber-200/60 via-amber-100/30 to-amber-200/20 blur-2xl'
                size={248}
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
              />
              
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-transparent to-amber-200/30"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23000000%22 fillOpacity%3D%220.03%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
              </div>

              <div className="relative p-12 md:p-16 h-full flex flex-col justify-between min-h-[400px]">
                {/* Logo area */}
                <div className="mb-8">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center bg-amber-200/30 group-hover:bg-amber-200/40 transition-all duration-500 rounded-lg">
                    <img 
                      src="/logos/fa-editorial-logo.png" 
                      alt="FA Editorial" 
                      className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h2 className="font-neue-machina text-4xl md:text-5xl font-normal text-deep-black mb-4 tracking-tight leading-tight group-hover:text-deep-black transition-colors duration-500">
                    Editorial
                  </h2>
                  <p className="font-neue-machina text-base text-deep-black/70 leading-relaxed font-light max-w-sm group-hover:text-deep-black transition-colors duration-500">
                    Explora las publicaciones editoriales y contenido especializado de la institución
                  </p>
                </div>

                {/* Button area */}
                <div className="flex items-center justify-between">
                  <a
                    href="https://fa-editorial.vercel.app/fa-editorial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center text-deep-black hover:text-deep-black transition-all duration-300 focus:outline-none"
                  >
                    <span className="font-neue-machina text-sm tracking-[0.15em] uppercase font-light mr-4 group-hover/btn:mr-6 transition-all duration-300">
                      Explorar
                    </span>
                    <div className="w-8 h-8 border border-deep-black/40 rounded-full flex items-center justify-center group-hover/btn:border-deep-black group-hover/btn:bg-deep-black/5 transition-all duration-300">
                      <svg
                        className="w-3 h-3 text-deep-black group-hover/btn:translate-x-0.5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>

                  {/* Subtle indicator */}
                  <div className="w-2 h-2 rounded-full bg-deep-black/20 group-hover:bg-deep-black/40 transition-all duration-500"></div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-200/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  )
}
