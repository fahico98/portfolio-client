import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { useScrollspy } from "@/hooks/useScrollspy.js"

export function Footer() {
  const socials = [
    { iconClass: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/fahico98/" },
    { iconClass: "twitter-x", title: "X", url: "https://twitter.com/fahico98" },
    { iconClass: "github", title: "GitHub", url: "https://github.com/fahico98" }
  ]

  const [, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const scrollspy = new useScrollspy()

  function scrollToContactSection() {
    if (location.pathname === "/") setSearchParams({ seccion: scrollspy.links.contact.sectionPath })
    else navigate(`/?seccion=${scrollspy.links.contact.sectionPath}`)
  }

  return (
    <footer className="hero-secondary-gradient w-full h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-5rem)] min-h-[30rem] flex justify-center items-center">
      <div className="w-full h-full flex flex-col padding-x max-width">
        <div className="w-full flex flex-col justify-center items-center grow gap-y-5 sm:gap-y-10">
          <p className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-white text-center">Construyamos algo increible...</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-y-2 sm:gap-x-4">
            <button className="btn-transparent-white btn-sm sm:btn-md md:btn-lg" onClick={scrollToContactSection}>
              Contácto&nbsp;<i className="bi bi-chat-left-dots"></i>
            </button>
            <button className="btn-transparent-white btn-sm sm:btn-md md:btn-lg">
              Descargar CV&nbsp;<i className="bi bi-download"></i>
            </button>
          </div>
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
        <div className="flex justify-center items-center w-full h-12 border-t border-white border-opacity-50">
          <p className="text-xs sm:text-sm font-sans text-white">
            Creado con amor por{" "}
            <a href="https://twitter.com/fahico98" target="_blank" className="link-white">
              fahico98
            </a>
            .
          </p>
          <div></div>
        </div>
      </div>
    </footer>
  )
}
