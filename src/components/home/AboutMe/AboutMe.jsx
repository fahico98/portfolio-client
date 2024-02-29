import styles from "@/components/home/AboutMe/AboutMe.module.css"
import aboutMeImage from "@/assets/images/about_me.png"
import { useScrollspy } from "@/hooks/useScrollspy.js"

function AboutMe() {
  const scrollspy = new useScrollspy()

  return (
    <div id={styles.aboutMe}>
      <div>
        <h2 id={scrollspy.links.aboutMe.sectionId}>{scrollspy.links.aboutMe.label}</h2>
        <p>
          Se cree ampliamente que la historia de Lorem Ipsum se origina. Esta obra filosófica, también conocida como En los extremos del bien y del mal, se
          dividió en cinco libros.
        </p>
        <br />
        <p>
          Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra
          filosófica. El Lorem Ipsum que conocemos hoy se deriva de partes del primer libro Liber Primus y su discusión sobre el hedonismo.
        </p>
      </div>
      <div>
        <img src={aboutMeImage} alt="About me image" />
      </div>
    </div>
  )
}

export { AboutMe }
