import coinrankingExperimentImage from "@/assets/images/coinranking_experiment.png"
import cloudinaryExperimentImage from "@/assets/images/cloudinary_experiment.png"
import googleMapsExperimentImage from "@/assets/images/google_maps_experiment.png"
import { useScrollspy } from "@/hooks/useScrollspy.js"
import { useNavigate } from "react-router-dom"
import { Fragment } from "react"

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
      title: "Integración con Google Maps API",
      url: "/experimento/google-maps",
      image: googleMapsExperimentImage,
      description: (
        <>
          Mapa interactivo basado en la API de{" "}
          <a href="https://developers.google.com/maps/documentation/places/web-service" target="_blank" className="link-white">
            Google Places
          </a>{" "}
          con la capacidad de buscar y ubicar lugares en el mapa según su descripción o nombre, la búsqueda se realiza en el área del mapa que el usuario está
          observando en el momento.
          <Fragment></Fragment>
        </>
      )
    }
  ]

  return (
    <div className="home-section-mt">
      <h2 className="home-section-title" id={scrollspy.links.experiments.sectionId}>
        {scrollspy.links.experiments.label}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 md:gap-4">
        {EXPERIMENTS.map((experiment, index) => (
          <div
            className="p-4 sm:p-6 h-[28rem] sm:h-[32rem] border-2 border-headline-200 hover:border-headline-950 active:border-headline-950 rounded-xl transition duration-300 relative"
            key={index}
          >
            <div className="h-full flex flex-col justify-start items-start">
              <h6 className="text-lg sm:text-xl font-serif text-white font-semibold mb-6 z-[1]">{experiment.title}</h6>
              <p className="text-sm sm:text-base font-sans text-white font-normal mb-6 z-[1]">{experiment.description}</p>
              <button type="button" className="btn-sm md:btn-md btn-transparent-white z-[1]" onClick={() => navigate(experiment.url)}>
                Explorar
              </button>
            </div>
            <div className="h-full w-full flex justify-end items-end bg-secondary-100 rounded-xl absolute top-0 left-0 p-4 sm:p-6">
              <img className="w-full h-auto object-contain select-none" src={experiment.image} alt={`${experiment.title} image`} />
            </div>
            <div className="experiment-card-gradient h-full w-full absolute top-0 left-0 rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Experiments }
