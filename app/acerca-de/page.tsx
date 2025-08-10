import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function AcercaDePage() {
  return (
    <div className="min-h-screen bg-sage-light">
      <SiteHeader />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-neue-machina text-5xl md:text-7xl font-normal text-deep-black tracking-tight leading-[0.9] mb-8 animate-fade-in-up">
              Acerca de
            </h1>
            <p className="font-neue-machina text-lg text-deep-black/70 leading-relaxed font-light max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Instituto Provincial de Enseñanza Superior Florentino Ameghino
            </p>
          </div>

          <div className="prose prose-lg max-w-none animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-8 text-deep-black/80 font-light leading-relaxed">
              <p className="font-neue-machina text-lg">
                El Instituto Provincial de Enseñanza Superior Florentino Ameghino es una institución 
                dedicada a la formación académica y la investigación, comprometida con el desarrollo 
                educativo y cultural de la región.
              </p>
              
              <p className="font-neue-machina">
                Nuestras publicaciones académicas reflejan el compromiso institucional con la 
                producción y difusión del conocimiento, abarcando diversas áreas del saber y 
                contribuyendo al debate académico contemporáneo.
              </p>

              <p className="font-neue-machina">
                FA Publicaciones surge como el sello editorial que agrupa tanto la revista 
                institucional como las publicaciones especializadas, manteniendo los más altos 
                estándares de calidad académica y editorial. Nuestros proyectos culturales 
                representan el compromiso institucional con la difusión del conocimiento y 
                el desarrollo cultural de la comunidad académica.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="/"
              className="font-neue-machina text-sm tracking-[0.15em] uppercase text-deep-black/80 hover:text-deep-black hover:underline focus:text-deep-black focus:underline focus:outline-none transition-all duration-300 font-light"
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
