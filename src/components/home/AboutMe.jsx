import aboutMeImage from "@/assets/images/about_me.png"
import { useScrollspy } from "@/hooks/useScrollspy.js"

function AboutMe() {
  const scrollspy = new useScrollspy()

  return (
    <div className="grid grid-cols-2 gap-x-16 lg:gap-x-24 home-section-mt">
      <div className="w-full flex flex-col items-start justify-start col-span-2 md:col-span-1">
        <h2 className="home-section-title" id={scrollspy.links.aboutMe.sectionId}>
          {scrollspy.links.aboutMe.label}
        </h2>
        <p className="home-section-text">
          Mi nombre es Fahibram Cárcamo, soy un desarrollador web Full Stack con más de 6 años de experiencia, vivo en Bogotá D.C., Colombia.
        </p>
        <br />
        <p className="home-section-text">
          Soy en gran medida autodidacta por lo que, con el tiempo, he adquirido la capacidad de aprender y dominar cualquier tecnología o herramienta de forma
          rápida y precisa. Soy proactivo, recursivo y siempre enfocado en los detalles y en los resultados.
        </p>
      </div>
      <div className="hidden md:flex items-center justify-center w-full p-0">
        <img className="w-full object-contain" src={aboutMeImage} alt="About me image" />
      </div>
    </div>
  )
}

export { AboutMe }
