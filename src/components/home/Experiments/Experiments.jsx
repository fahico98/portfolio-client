import coinrankingExperimentImage from "@/assets/images/coinranking_experiment.png"
import cloudinaryExperimentImage from "@/assets/images/cloudinary_experiment.png"
import leafletExperimentImage from "@/assets/images/leaflet_experiment.png"
import styles from "@/components/home/Experiments/Experiments.module.css"
import { useScrollspy } from "@/hooks/useScrollspy.js"
import { useNavigate } from "react-router-dom"

function Experiments() {
  const scrollspy = new useScrollspy()
  const navigate = useNavigate()

  const EXPERIMENTS = [
    {
      title: "Editor de imágenes con Cloudinary",
      url: "/experimento/cloudinary",
      image: cloudinaryExperimentImage,
      description: (
        <>
          Editor de imágenes basado en la API de{" "}
          <a href="https://cloudinary.com/" target="_blank" className="link-white">
            Cloudindary
          </a>
          , un software como servicio enfocado en el almacenamiento y presentación de archivos multimedia. Utiliza las{" "}
          <a href="https://cloudinary.com/documentation/image_transformations" target="_blank" className="link-white">
            transformaciones
          </a>{" "}
          de Cloudinary para editar una imagen cargada por el usuario.
        </>
      )
    },
    {
      title: "Datos de criptomonedas con Coinranking",
      url: "/experimento/coinranking",
      image: coinrankingExperimentImage,
      description: (
        <>
          Por medio de la conexión con la API de{" "}
          <a href="https://coinranking.com/" target="_blank" className="link-white">
            Coinranking
          </a>{" "}
          se muestra una tabla con los datos de las primeras 50 criptomonedas con la mayor capitalización de mercado del momento. Los datos de la tabla se
          actualizan cada minuto.
        </>
      )
    },
    {
      title: "Mapa interactivo al estilo Google Maps con Leaflet",
      url: "/experimento/leaflet",
      image: leafletExperimentImage,
      description: (
        <>
          Mapa interactivo basado en la librería{" "}
          <a href="https://leafletjs.com/" target="_blank" className="link-white">
            Leaflet
          </a>{" "}
          (de código abierto) de Javascript, con la capacidad de cambiar entre diferentes capas de visualización de mapas y de obtener la ubicación real del
          usuario, si este otorga el permiso correspondiente.
        </>
      )
    }
  ]

  return (
    <div id={styles.experiments}>
      <h2 id={scrollspy.links.experiments.sectionId}>{scrollspy.links.experiments.label}</h2>
      <div>
        {EXPERIMENTS.map((experiment, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardBody}>
              <h6>{experiment.title}</h6>
              <p>{experiment.description}</p>
              <button type="button" className="btn-md btn-transparent-white" onClick={() => navigate(experiment.url)}>
                Explorar&nbsp;<i className="bi bi-search"></i>
              </button>
            </div>
            <div className={styles.cardImageContainer}>
              <img src={experiment.image} alt={`${experiment.title} image`} />
            </div>
            <div className={`experiment-card-gradient ${styles.cardFade}`}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Experiments }
