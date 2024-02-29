import { NavbarDialog } from "@/components/shared/Navbar/NavbarDialog/NavbarDialog.jsx"
import transparentNavbarRoutes from "@/statics/transparentNavbarRoutes.json"
import style from "@/components/shared/Navbar/Navbar.module.css"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

function Navbar() {
  const [onTop, setOnTop] = useState(true)
  const [hasTransparentNavbar, setHasTransparentNavbar] = useState(true)
  let location = useLocation()

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
    <nav id={style.navbar} className={hasTransparentNavbar && onTop ? "drop-shadow-none bg-transparent" : "drop-shadow-md bg-white"}>
      <div className="max-width padding-x">
        <div>
          <p className={hasTransparentNavbar && onTop ? "text-white" : "text-high-700"}>{"<fahico98/>"}</p>
        </div>
        <div>
          <button type="button" className={`btn-md ${hasTransparentNavbar && onTop ? "btn-transparent-white" : "btn-transparent-high"}`}>
            Descargar CV&nbsp;<i className="bi bi-download"></i>
          </button>
        </div>
        <div>
          <NavbarDialog transparentNavbar={hasTransparentNavbar && onTop} />
        </div>
      </div>
    </nav>
  )
}

export { Navbar }
