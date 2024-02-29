import styles from "@/components/home/Contact/Contact.module.css"
import { useScrollspy } from "@/hooks/useScrollspy.js"

function Contact() {
  const scrollspy = new useScrollspy()

  return (
    <div id={styles.contact}>
      <h2 className="text-2xl mb-10" id={scrollspy.links.contact.sectionId}>
        {scrollspy.links.contact.label}
      </h2>
      <p>
        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra
        filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos hoy se deriva de partes
        del primer libro Liber Primus y su discusión sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un
        latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual.
      </p>
      <br />
      <p>
        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra
        filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos hoy se deriva de partes
        del primer libro Liber Primus y su discusión sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un
        latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual.
      </p>
      <br />
      <p>
        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra
        filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos hoy se deriva de partes
        del primer libro Liber Primus y su discusión sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un
        latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual.
      </p>
      <br />
      <p>
        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra
        filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos hoy se deriva de partes
        del primer libro Liber Primus y su discusión sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un
        latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual.
      </p>
      <br />
      <p>
        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra
        filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos hoy se deriva de partes
        del primer libro Liber Primus y su discusión sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un
        latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual.
      </p>
      <br />
      <p>
        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra
        filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos hoy se deriva de partes
        del primer libro Liber Primus y su discusión sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un
        latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual.
      </p>
      <br />
      <p className="mb-10">
        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra
        filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos hoy se deriva de partes
        del primer libro Liber Primus y su discusión sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un
        latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual.
      </p>
    </div>
  )
}

export { Contact }
