import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function InstitucionalPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-soft-black">
            Información Institucional
          </h1>
          <p className="font-sans text-cool-gray text-lg">
            Contenido institucional próximamente disponible
          </p>
          <div className="pt-8">
            <Link 
              href="/"
              className="font-sans text-sm font-medium text-institutional-blue hover:underline focus:underline focus:outline-none transition-all duration-200"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
