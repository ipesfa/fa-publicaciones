import Link from 'next/link'

export function SecondarySection() {
  return (
    <section className="py-16 px-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-cool-gray text-base md:text-lg leading-relaxed mb-6">
          El Instituto Provincial de Enseñanza Superior Florentino Ameghino desarrolla 
          actividades de investigación, extensión y publicación académica para contribuir 
          al desarrollo educativo y cultural de la región.
        </p>
        <Link 
          href="/institucional"
          className="font-sans text-sm font-medium text-institutional-blue hover:underline focus:underline focus:outline-none transition-all duration-200"
        >
          Conocer más
        </Link>
      </div>
    </section>
  )
}
