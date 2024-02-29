import cloudinaryExperimentImage from "@/assets/images/cloudinary_experiment.png"
import styles from "@/components/home/Experiments/Experiments.module.css"
import { useScrollspy } from "@/hooks/useScrollspy.js"
import { useNavigate } from "react-router-dom"

function Experiments() {
  const scrollspy = new useScrollspy()
  const navigate = useNavigate()

  return (
    <div id={styles.experiments}>
      <div>
        <div>
          <h2 id={scrollspy.links.experiments.sectionId}>{scrollspy.links.experiments.label}</h2>
          <p>
            Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra
            filosófica. El Lorem Ipsum que conocemos hoy se deriva de partes del primer libro Liber Primus y su discusión sobre el hedonismo.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <h6>Editor de imágenes con Cloudinary</h6>
            <p>
              Este pequeño ejercicio consta de un editor de imágenes basado en la API de Cloudindary, un software como servicio enfocado en el almacenamiento y
              precentación de archivos multimedia (fotos y videos), en este caso utilicé las transformaciones de Cloudinary para editar una imagen cargada por
              el usuario.
            </p>
            <button type="button" className="btn-md btn-transparent-white" onClick={() => navigate("/experimento/cloudinary")}>
              Explorar
            </button>
          </div>
          <div className={styles.cardImageContainer}>
            <img src={cloudinaryExperimentImage} alt="Cloudinary experiment image" />
          </div>
          <div className={`experiment-card-gradient ${styles.cardFade}`}></div>
        </div>
        <div className={styles.card}>
          <h6 className={styles.cardTitle}>Coinranking</h6>
        </div>
        <div className={styles.card}>
          <h6 className={styles.cardTitle}>One Weather Map</h6>
        </div>
      </div>
    </div>
  )
}

export { Experiments }
