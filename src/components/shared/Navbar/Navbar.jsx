import transparentNavbarRoutes from "@/statics/transparentNavbarRoutes.json"
import cvDocument from "@/assets/documents/FAHIBRAM-CARCAMO-CV-2024-ES.pdf"
import { NavbarDialog } from "@/components/shared/Navbar/NavbarDialog.jsx"
import { useLocation, Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

function Navbar() {
  const [hasTransparentNavbar, setHasTransparentNavbar] = useState(true)
  const [onTop, setOnTop] = useState(true)

  const downloadLink = useRef(null)

  let location = useLocation()

  const NAVBAR_CLASSES = "w-full flex justify-center fixed top-0 left-0 right-0 transition duration-300 p-0 z-10"
  const NAVBAR_SHADOW_CLASS = `${hasTransparentNavbar && onTop ? "drop-shadow-none bg-transparent" : "drop-shadow-md bg-white"}`

  function updateOnTop() {
    setOnTop(window.scrollY <= 64)
  }

  useEffect(() => {
    setHasTransparentNavbar(transparentNavbarRoutes.includes(location.pathname))
  }, [location])

  useEffect(() => {
    document.addEventListener("scroll", updateOnTop)
    return () => document.removeEventListener("scroll", updateOnTop)
  })

  return (
    <nav className={NAVBAR_CLASSES + " " + NAVBAR_SHADOW_CLASS}>
      <div className="flex max-width padding-x justify-between items-center relative w-full h-14 sm:h-20 py-2">
        <div className="w-1/3 flex justify-start p-0">
          <Link to={"/"} className={`text-base sm:text-lg md:text-xl font-mono font-medium ${hasTransparentNavbar && onTop ? "text-white" : "text-high-700"}`}>
            {"<fahico98/>"}
          </Link>
        </div>
        <div className="w-1/3 flex justify-center p-0">
          <button
            type="button"
            className={`hidden sm:block btn-md ${hasTransparentNavbar && onTop ? "btn-transparent-white" : "btn-transparent-high"}`}
            onClick={() => downloadLink.current.click()}
          >
            Descargar CV&nbsp;<i className="bi bi-download"></i>
          </button>
          <a href={cvDocument} download ref={downloadLink} className="hidden">
            download
          </a>
        </div>
        <div className="w-1/3 flex justify-end relative p-0">
          <NavbarDialog transparentNavbar={hasTransparentNavbar && onTop} />
        </div>
      </div>
    </nav>
  )
}

export { Navbar }
