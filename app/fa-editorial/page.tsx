import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function FAEditorialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-200/30">
      <SiteHeader />
      <main className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-amber-200/40 rounded-2xl">
              <img 
                src="/logos/fa-editorial-logo.png" 
                alt="FA Editorial" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Título */}
          <h1 className="font-neue-machina text-6xl md:text-8xl font-normal text-deep-black tracking-tight leading-[0.85] animate-fade-in-up">
            FA Editorial
          </h1>

          {/* Subtítulo */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-neue-machina text-2xl md:text-3xl font-light text-deep-black/80 tracking-wide">
              En Producción
            </h2>
            <p className="font-neue-machina text-lg text-deep-black/60 leading-relaxed font-light max-w-2xl mx-auto">
              Estamos trabajando para traerte las mejores publicaciones editoriales y contenido especializado de la institución.
            </p>
          </div>

          {/* Indicador de progreso */}
          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-2 bg-amber-200/50 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
            <p className="font-neue-machina text-sm text-deep-black/50 mt-4">
              Progreso: 60%
            </p>
          </div>

          {/* Botón de regreso */}
          <div className="pt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="/"
              className="group inline-flex items-center px-8 py-4 border border-deep-black/30 rounded-full transition-all duration-300 hover:border-deep-black/60 hover:bg-deep-black/5 focus:outline-none focus:ring-1 focus:ring-deep-black/40"
            >
              <svg
                className="w-4 h-4 text-deep-black/60 group-hover:text-deep-black transition-all duration-300 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-neue-machina text-sm tracking-[0.1em] uppercase text-deep-black/80 group-hover:text-deep-black transition-colors duration-300 font-light">
                Volver al inicio
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
