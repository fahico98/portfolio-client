import { Navbar } from "@/components/shared/Navbar/Navbar.jsx"
import { Outlet } from "react-router-dom"

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export { Root }
