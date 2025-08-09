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
        isScrolled ? "bg-deep-black/95 backdrop-blur-sm border-b border-deep-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center space-x-3 opacity-0 animate-fade-in-left"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <div className="w-10 h-10 bg-deep-black flex items-center justify-center group-hover:bg-deep-black/80 transition-colors duration-300">
            <span className="text-white font-bold text-lg">FA</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xs font-medium text-deep-black tracking-wider uppercase leading-tight">
              IPES FA
            </span>
            <span className="font-sans text-xs font-light text-deep-black/80 tracking-wider uppercase leading-tight">
              PUBLICACIONES
            </span>
          </div>
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
                className="font-sans text-xs font-light text-deep-black/80 hover:text-deep-black transition-all duration-300 tracking-[0.2em] uppercase hover:underline focus:outline-none focus:underline"
              >
                Acerca de
              </Link>
            </li>
            <li>
              <span className="font-sans text-xs font-light text-deep-black/60 tracking-[0.3em] uppercase">ES</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
