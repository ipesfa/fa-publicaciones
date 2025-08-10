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
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and description */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-deep-black/10 rounded-lg flex items-center justify-center mr-4">
                <span className="font-neue-machina text-xl font-bold text-deep-black">FA</span>
              </div>
              <div>
                <div className="font-neue-machina text-sm font-medium text-deep-black/80 uppercase tracking-[0.15em]">
                  IPES FA
                </div>
                <div className="font-neue-machina text-xs text-deep-black/60 uppercase tracking-[0.2em]">
                  PUBLICACIONES
                </div>
              </div>
            </div>
            <p className="font-neue-machina text-sm text-deep-black/70 leading-relaxed max-w-md">
              Portal de publicaciones académicas del Instituto Provincial de Educación Superior Florentino Ameghino.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="font-neue-machina text-sm font-medium text-deep-black/80 uppercase tracking-[0.15em] mb-4">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deep-black/10 hover:bg-deep-black/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-deep-black/70 group-hover:text-deep-black transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deep-black/10 hover:bg-deep-black/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-deep-black/70 group-hover:text-deep-black transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deep-black/10 hover:bg-deep-black/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-deep-black/70 group-hover:text-deep-black transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deep-black/10 hover:bg-deep-black/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-deep-black/70 group-hover:text-deep-black transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-deep-black/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-neue-machina text-sm text-deep-black/60">
              © 2025 IPES Florentino Ameghino. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="/acerca-de"
                className="font-neue-machina text-sm text-deep-black/60 hover:text-deep-black transition-colors duration-300"
              >
                Acerca de
              </a>
              <a
                href="/institucional"
                className="font-neue-machina text-sm text-deep-black/60 hover:text-deep-black transition-colors duration-300"
              >
                Institucional
              </a>
              <a
                href="/fa-editorial"
                className="font-neue-machina text-sm text-deep-black/60 hover:text-deep-black transition-colors duration-300"
              >
                FA Editorial
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
