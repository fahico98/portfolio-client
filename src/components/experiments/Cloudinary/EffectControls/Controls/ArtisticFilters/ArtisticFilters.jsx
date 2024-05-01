import styles from "@/components/experiments/Cloudinary/EffectControls/Controls/ArtisticFilters/ArtisticFilters.module.css"
import { titleCase } from "@/utils/globalFunctions.js"
import eventBus from "@/libs/mitt.js"
import { useState } from "react"

function ArtisticFilters() {
  const [filter, setFilter] = useState("")

  const FILTERS = [
    "al_dente",
    "athena",
    "audrey",
    "aurora",
    "daguerre",
    "eucalyptus",
    "fes",
    "frost",
    "hairspray",
    "hokusai",
    "incognito",
    "linen",
    "peacock",
    "primavera",
    "quartz",
    "red_rock",
    "refresh",
    "sizzle",
    "sonnet",
    "ukulele",
    "zorro"
  ]

  function submit(event) {
    event.preventDefault()
    eventBus.emit("cloudinary.apply-transformation", {
      transformation: "t_portfolio_art",
      transformationArguments: `$filter_!${filter}!`
    })
  }

  return (
    <form id={styles.artisticFilters} onSubmit={submit}>
      <div>
        <h6 className={`mb-4 ${styles.title}`}>Filtro</h6>
        <select id="effect-selector" className="input-high input-md w-1/2" onChange={event => setFilter(event.target.value)}>
          <option value="">Seleccionar filtro...</option>
          {FILTERS.map((filter, index) => (
            <option key={index} value={filter}>
              {titleCase(filter.replace("_", " "))}
            </option>
          ))}
        </select>
        <button type="submit" className="btn-md btn-high w-fit mt-10" disabled={!filter}>
          Aplicar efecto
        </button>
      </div>
    </form>
  )
}

export { ArtisticFilters }
