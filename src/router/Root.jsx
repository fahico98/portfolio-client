import { Navbar } from "@/components/shared/Navbar/Navbar.jsx"
import { Footer } from "@/components/shared/Footer/Footer.jsx"
import { Outlet } from "react-router-dom"

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export { Root }
