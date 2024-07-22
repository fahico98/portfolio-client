import cloudinaryTransformations from "@/statics/cloudinaryTransformations.json"
import effectControlsStyles from "@/styles/modules/EffectControls.module.css"
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
      transformation: cloudinaryTransformations.art.name,
      transformationArguments: `$filter_!${filter}!`
    })
  }

  return (
    <form className="w-full" onSubmit={submit}>
      <div className={`w-full flex flex-col ${effectControlsStyles.inputContainerMargin}`}>
        <label htmlFor="effect-selector" className="label-sm xl:label-md label-headline w-fit mb-1 ml-2">
          Filtro
        </label>
        <select id="effect-selector" className="input-sm xl:input-md input-high w-full" onChange={event => setFilter(event.target.value)}>
          <option value="">Seleccionar filtro...</option>
          {FILTERS.map((filter, index) => (
            <option key={index} value={filter}>
              {titleCase(filter.replace("_", " "))}
            </option>
          ))}
        </select>
        <button type="submit" className={`btn-sm xl:btn-md btn-high w-fit ${effectControlsStyles.applyEffectButtonMargin}`} disabled={!filter}>
          Aplicar efecto
        </button>
      </div>
    </form>
  )
}

export { ArtisticFilters }
