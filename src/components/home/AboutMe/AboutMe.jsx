import styles from "@/components/home/AboutMe/AboutMe.module.css"
import aboutMeImage from "@/assets/images/about_me.png"
import { useScrollspy } from "@/hooks/useScrollspy.js"

function AboutMe() {
  const scrollspy = new useScrollspy()

  return (
    <div id={styles.aboutMe}>
      <div>
        <h2 id={scrollspy.links.aboutMe.sectionId}>{scrollspy.links.aboutMe.label}</h2>
        <p>Mi nombre es Fahibram Cárcamo, soy un desarrollador web full-stack con mas de 6 años de experiencia, vivo en Bogotá D.C., Colombia.</p>
        <br />
        <p>
          Soy en gran medida autodidacta por lo que, con el tiempo, he adquirido la capacidad de aprender y dominar cualquier tecnología o herramienta de forma
          rápida y precisa. Soy proactivo, recursivo y siempre enfocado en los detalles y en los resultados.
        </p>
      </div>
      <div>
        <img src={aboutMeImage} alt="About me image" />
      </div>
    </div>
  )
}

export { AboutMe }
