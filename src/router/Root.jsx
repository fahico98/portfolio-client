import { Navbar } from "@/components/shared/Navbar/Navbar.jsx"
import withFooterRoutes from "@/statics/withFooterRoutes.json"
import { Footer } from "@/components/shared/Footer.jsx"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

function Root() {
  const [hasFooter, setHasFooter] = useState(true)
  let location = useLocation()

  useEffect(() => {
    setHasFooter(withFooterRoutes.includes(location.pathname))
  }, [location])

  return (
    <>
      <Navbar />
      <Outlet />
      {hasFooter ? <Footer /> : ""}
    </>
  )
}

export { Root }
