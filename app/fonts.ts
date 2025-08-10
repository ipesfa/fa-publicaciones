import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600"],
})

export const neueMachina = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-neue-machina",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})
