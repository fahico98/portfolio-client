import { ScrollRestoration } from "react-router-dom"
import { Outlet } from "react-router-dom"

function Experiment() {
  return (
    <section className="view-wrapper">
      <div className="padding-x max-width w-full">
        <Outlet />
      </div>
      <ScrollRestoration />
    </section>
  )
}

export { Experiment }
