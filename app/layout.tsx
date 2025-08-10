import type React from "react"
import type { Metadata } from "next"
import { inter, playfair, neueMachina } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "FA Publicaciones - IPES Florentino Ameghino",
      description: "Portal de publicaciones del Instituto Provincial de Enseñanza Superior Florentino Ameghino",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${neueMachina.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
