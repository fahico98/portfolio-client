import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import heroImage from "@/assets/images/photo_400_400.jpg"
import { useScrollspy } from "@/hooks/useScrollspy.js"
import styles from "@/components/home/Hero.module.css"

function Hero() {
  const socials = [
    { iconClass: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/fahico98/" },
    { iconClass: "twitter-x", title: "X", url: "https://twitter.com/fahico98" },
    { iconClass: "github", title: "GitHub", url: "https://github.com/fahico98" }
  ]

  const [, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const scrollspy = new useScrollspy()

  const TITLE_CLASSES = "text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-white text-center md:text-start"
  const TEXT_CLASSES = "text-base lg:text-xl font-sans font-normal text-white text-center md:text-start"

  function scrollToContactSection() {
    if (location.pathname === "/") setSearchParams({ seccion: scrollspy.links.contact.sectionPath })
    else navigate(`/?seccion=${scrollspy.links.contact.sectionPath}`)
  }

  return (
    <div className="w-full h-screen min-h-[40rem] -mt-14 sm:mt-[-5rem] pt-14 sm:pt-20 flex justify-center items-center hero-secondary-gradient">
      <div className="w-full grid gap-x-8 grid-cols-5 padding-x max-width">
        <div className="col-span-5 md:col-span-3 flex flex-col justify-center items-center md:items-start gap-y-3 sm:gap-y-4">
          <p className={TEXT_CLASSES}>Hola, mi nombre es</p>
          <p className={TITLE_CLASSES}>Fahibram Cárcamo.</p>
          <p className={`${TEXT_CLASSES} mb-2`}>Soy un Desarrollador Web Full Stack de Bogotá D.C.</p>
          <button type="button" className="btn-sm sm:btn-md md:btn-lg btn-transparent-white mb-2" onClick={scrollToContactSection}>
            Contáctame&nbsp;<i className="bi bi-chat-left-dots"></i>
          </button>
          <div className="flex justify-start items-center px-0 gap-x-3">
            {socials.map((social, index) => (
              <button
                type="button"
                className="btn-icon-sm md:btn-icon-md btn-icon-white"
                title={social.title}
                key={index}
                onClick={() => window.open(social.url, "_blank")}
              >
                <i className={`bi bi-${social.iconClass}`}></i>
              </button>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-end items-center col-span-2">
          <div id={styles.imageContainer} className="relative">
            <img
              src={heroImage}
              className="w-64 lg:w-80 aspect-square object-cover select-none rounded-2xl grayscale border-4 border-white relative z-[2]"
              alt="Fahibram Cárcamo"
            />
            <div id={styles.frame1} />
            <div id={styles.frame2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
