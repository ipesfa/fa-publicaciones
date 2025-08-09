"use client"

import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="py-16 px-6 bg-sage-primary border-t border-deep-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Left side - Logo and description */}
          <div
            className={`max-w-md transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-deep-black flex items-center justify-center">
                <span className="text-sage-primary font-bold text-sm">FA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xs font-medium text-deep-black tracking-wider uppercase leading-tight">
                  IPES FA
                </span>
                <span className="font-sans text-xs font-light text-deep-black/80 tracking-wider uppercase leading-tight">
                  PUBLICACIONES
                </span>
              </div>
            </div>
            <p className="font-serif text-sm text-deep-black/70 leading-relaxed font-light">
              Instituto Provincial de Educación Superior Florentino Ameghino
            </p>
          </div>

          {/* Right side - Links and contact */}
          <div
            className={`flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-deep-black/60 mb-3 font-light">
                Enlaces
              </h3>
              <div className="space-y-2">
                <p>
                  <a
                    href="https://revista-institucional.vercel.app/"
                    className="font-sans text-sm text-deep-black/80 hover:text-deep-black transition-colors duration-300 font-light focus:outline-none focus:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FA Revista
                  </a>
                </p>
                <p>
                  <a
                    href="/fa-editorial"
                    className="font-sans text-sm text-deep-black/80 hover:text-deep-black transition-colors duration-300 font-light focus:outline-none focus:underline"
                  >
                    FA Editorial
                  </a>
                </p>
                <p>
                  <a
                    href="/acerca-de"
                    className="font-sans text-sm text-deep-black/80 hover:text-deep-black transition-colors duration-300 font-light focus:outline-none focus:underline"
                  >
                    Acerca de
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-deep-black/60 mb-3 font-light">
                Contacto
              </h3>
              <div className="space-y-2">
                <p className="font-sans text-sm text-deep-black font-light">
                  <a
                    href="mailto:contacto@ipes-fa.edu.ar"
                    className="hover:text-deep-black transition-colors duration-300 focus:outline-none focus:underline"
                  >
                    contacto@ipes-fa.edu.ar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className={`pt-8 mt-8 border-t border-deep-black/10 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <p className="font-sans text-xs text-deep-black/60 tracking-[0.1em] font-light">
            © 2024 IPES Florentino Ameghino. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
