"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-sage-primary relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-dark/20 via-transparent to-sage-light/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%22100%22 height%3D%22100%22 viewBox%3D%220 0 100 100%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23000000%22 fillOpacity%3D%220.02%22%3E%3Ccircle cx%3D%2250%22 cy%3D%2250%22 r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <h1
            className={`font-serif text-6xl md:text-8xl lg:text-9xl font-normal text-deep-black mb-8 tracking-tight leading-[0.85] transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Descubre las publicaciones
          </h1>
          <p
            className={`font-serif text-base md:text-lg text-deep-black/70 leading-relaxed font-light max-w-2xl mb-16 transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Navega la producción académica del Instituto Provincial de Educación Superior Florentino Ameghino desde sus
            inicios hasta la actualidad
          </p>

          {/* Enter button similar to museum */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <button className="group inline-flex items-center px-8 py-4 border border-deep-black/30 rounded-full transition-all duration-300 hover:border-deep-black/60 hover:bg-deep-black/5 focus:outline-none focus:ring-1 focus:ring-deep-black/40">
              <svg
                className="w-4 h-4 text-deep-black/60 group-hover:text-deep-black transition-all duration-300 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="font-sans text-sm tracking-[0.1em] uppercase text-deep-black/80 group-hover:text-deep-black transition-colors duration-300 font-light">
                Explorar
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
