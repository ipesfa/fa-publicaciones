import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function FAEditorialPage() {
  return (
    <div className="min-h-screen bg-sage-green">
      <SiteHeader />
      <main className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <h1 className="font-serif text-5xl md:text-7xl font-normal text-white tracking-tight leading-[0.9] italic animate-fade-in-up">
            FA Editorial
          </h1>
          <p className="font-sans text-base text-white/60 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Próximamente disponible
          </p>
          <div className="pt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              href="/"
              className="font-sans text-xs tracking-[0.15em] uppercase text-white/80 hover:text-white hover:underline focus:text-white focus:underline focus:outline-none transition-all duration-300 font-light"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
