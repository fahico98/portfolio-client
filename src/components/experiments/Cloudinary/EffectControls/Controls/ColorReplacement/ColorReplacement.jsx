import styles from "@/components/experiments/Cloudinary/EffectControls/Controls/ColorReplacement/ColorReplacement.module.css"
import { range } from "@/utils/globalFunctions.js"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

function ColorReplacement() {
  const TOLERANCE_VALUES = range(0, 100, 10)
  const [prominentColor, setProminentColor] = useState(false)
  const [fromColor, setFromColor] = useState("#ffffff")
  const [toColor, setToColor] = useState("#ffffff")
  const [tolerance, setTolerance] = useState(50)

  function submit(event) {
    event.preventDefault()

    eventBus.emit("cloudinary.apply-transformation", {
      transformation: prominentColor ? "t_portfolio_color_replacement_default" : "t_portfolio_color_replacement",
      transformationArguments: prominentColor
        ? `$tocolor_!${toColor.slice(1)}!,$tolerance_${tolerance}`
        : `$tocolor_!${toColor.slice(1)}!,$tolerance_${tolerance},$fromcolor_!${fromColor.slice(1)}!`
    })
  }

  useEffect(() => {
    document.querySelector("#tolerance-range").value = 50
    document.querySelector("#from-color").value = "#ffffff"
    document.querySelector("#to-color").value = "#ffffff"
  }, [])

  return (
    <form id={styles.colorReplacement} onSubmit={submit}>
      <div>
        <h6 className={`mb-6 ${styles.title}`}>Colores</h6>
        <div className="mb-4">
          <label htmlFor="from-color" className={`label-md ${prominentColor ? "text-headline-500" : "text-headline-950"}`}>
            Color a reemplazar
          </label>
          <input
            type="color"
            id="from-color"
            className={`${prominentColor ? "bg-headline-100" : "bg-white"}`}
            disabled={prominentColor}
            onChange={event => setFromColor(event.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="prominent-color-checkbox"
            className="checkbox-md checkbox-high"
            onChange={event => setProminentColor(event.target.checked)}
          />
          <label htmlFor="prominent-color-checkbox" className="label-md label-headline w-fit ml-3">
            Seleccionar el color predominante de la imagen.
          </label>
        </div>
        <div className="mb-10">
          <label htmlFor="to-color" className="label-md text-headline-950">
            Color de reemplazo
          </label>
          <input type="color" id="to-color" className="bg-white" onChange={event => setToColor(event.target.value)} />
        </div>
        <h6 className={styles.title}>Porcentaje de tolerancia</h6>
        <div>
          <p>{tolerance}%</p>
          <input
            min="0"
            max="100"
            step="10"
            type="range"
            list="markers"
            id="tolerance-range"
            className="w-full accent-high-700"
            onChange={event => setTolerance(event.target.value)}
          />
          <datalist id="markers" className="mt-2">
            {TOLERANCE_VALUES.map(value => (
              <option key={value} value={value} />
            ))}
          </datalist>
        </div>
        <button type="submit" className="btn-md btn-high w-fit mt-10">
          Aplicar efecto
        </button>
      </div>
    </form>
  )
}

export { ColorReplacement }
