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
                FA Publicaciones es el sello editorial académico del Instituto Provincial de Enseñanza Superior "Florentino Ameghino" de Tierra del Fuego, Argentina. Surge como una iniciativa orientada a visibilizar, preservar y difundir producciones originales de carácter académico, pedagógico y cultural que nacen del trabajo de docentes, investigadores y estudiantes de nivel superior.
              </p>
              
              <p className="font-neue-machina">
                Nuestro catálogo incluye artículos científicos, ensayos académicos, experiencias pedagógicas y libros, que abordan críticamente los vínculos entre educación, cultura y sociedad desde múltiples disciplinas, con especial énfasis en los contextos del sur del país y de América Latina.
              </p>

              <p className="font-neue-machina">
                Con un enfoque de acceso abierto, promovemos prácticas editoriales éticas, inclusivas y colaborativas, comprometidas con el derecho a la educación, el pensamiento crítico y la circulación libre del conocimiento.
              </p>

              <p className="font-neue-machina">
                FA Publicaciones apuesta por una lectura rigurosa y dinámica, poniendo en diálogo saberes situados, perspectivas interdisciplinares y voces diversas que problematizan lo educativo desde enfoques contemporáneos.
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
