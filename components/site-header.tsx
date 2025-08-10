"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#8C9280]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center space-x-3 opacity-0 animate-fade-in-left"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <img 
            src="/logos/fa-publicaciones-logo.png" 
            alt="FA Publicaciones" 
            className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`font-neue-machina text-xs font-medium tracking-[0.1em] uppercase ${
            isScrolled ? "text-white/90" : "text-deep-black/80"
          }`}>
            PUBLICACIONES
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className="opacity-0 animate-fade-in-right"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/acerca-de"
                className={`font-neue-machina text-xs font-light transition-all duration-300 tracking-[0.2em] uppercase hover:underline focus:outline-none focus:underline ${
                  isScrolled ? "text-white/90 hover:text-white" : "text-deep-black/80 hover:text-deep-black"
                }`}
              >
                Acerca de
              </Link>
            </li>
            <li>
              <span className={`font-neue-machina text-xs font-light tracking-[0.3em] uppercase ${
                isScrolled ? "text-white/70" : "text-deep-black/60"
              }`}>ES</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
