import cloudinaryTransformations from "@/statics/cloudinaryTransformations.json"
import effectControlsStyles from "@/styles/modules/EffectControls.module.css"
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
      transformation: prominentColor ? cloudinaryTransformations.color_replacement_default.name : cloudinaryTransformations.color_replacement.name,
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
    <form className="w-full flex flex-col" onSubmit={submit}>
      <div className="w-full flex flex-col">
        <h6 className={effectControlsStyles.inputContainerTitleText}>Colores</h6>
        <div className="flex justify-start items-center gap-x-3 xl:gap-x-6 mb-4">
          <label htmlFor="from-color" className={`label-sm lg:label-md ${prominentColor ? "text-headline-500" : "text-headline-950"}`}>
            Color a reemplazar
          </label>
          <input
            type="color"
            id="from-color"
            className={effectControlsStyles.colorPicker}
            disabled={prominentColor}
            onChange={event => setFromColor(event.target.value)}
          />
        </div>
        <div className={`${effectControlsStyles.inputContainerMargin} w-full flex items-start`}>
          <input
            type="checkbox"
            id="prominent-color-checkbox"
            className="checkbox-sm lg:checkbox-md checkbox-high"
            onChange={event => setProminentColor(event.target.checked)}
          />
          <label htmlFor="prominent-color-checkbox" className="label-sm lg:label-md label-headline ml-3">
            Seleccionar el color predominante de la imagen.
          </label>
        </div>
        <div className={`${effectControlsStyles.inputContainerMargin} flex justify-start items-center gap-x-3 xl:gap-x-6`}>
          <label htmlFor="to-color" className="label-sm lg:label-md text-headline-950">
            Color de reemplazo
          </label>
          <input type="color" id="to-color" onChange={event => setToColor(event.target.value)} className={effectControlsStyles.colorPicker} />
        </div>
        <h6 className={effectControlsStyles.inputContainerTitleText}>Porcentaje de tolerancia</h6>
        <div className="flex flex-col items-end mb-6 xl:mb-8">
          <p className={effectControlsStyles.inputRangeText}>{tolerance}%</p>
          <input
            min="0"
            max="100"
            step="10"
            type="range"
            list="markers"
            id="tolerance-range"
            className={`${effectControlsStyles.inputRangeHeight} w-full accent-high-700`}
            onChange={event => setTolerance(event.target.value)}
          />
          <datalist id="markers" className="mt-1 xl:mt-2">
            {TOLERANCE_VALUES.map(value => (
              <option key={value} value={value} />
            ))}
          </datalist>
        </div>
        <button type="submit" className={`btn-sm xl:btn-md btn-high w-fit ${effectControlsStyles.applyEffectButtonMargin}`}>
          Aplicar efecto
        </button>
      </div>
    </form>
  )
}

export { ColorReplacement }
