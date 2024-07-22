import cloudinaryTransformations from "@/statics/cloudinaryTransformations.json"
import effectControlsStyles from "@/styles/modules/EffectControls.module.css"
import { range } from "@/utils/globalFunctions.js"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

function Tint() {
  const BLEND_STRENGTH_VALUES = range(0, 100, 10)
  const [blendStrength, setBlendStrength] = useState(50)
  const [colors, setColors] = useState([
    { name: "color1", label: "Color 1", value: "#ffffff", active: true },
    { name: "color2", label: "Color 2", value: "#ffffff", active: false },
    { name: "color3", label: "Color 3", value: "#ffffff", active: false }
  ])

  function submit(event) {
    event.preventDefault()
    let colorValues = []
    let transformationArguments = `$amount_${blendStrength},`

    colors.forEach(color => {
      if (color.active) colorValues.push(color.value)
    })

    colorValues.forEach((colorValue, index) => {
      transformationArguments += `$color${index + 1}_!${colorValue.slice(1)}!${index === colorValues.length - 1 ? "" : ","}`
    })

    let transformation = ""

    switch (colorValues.length) {
      case 1:
        transformation = cloudinaryTransformations.tint_one_color.name
        break
      case 2:
        transformation = cloudinaryTransformations.tint_two_colors.name
        break
      case 3:
        transformation = cloudinaryTransformations.tint_three_colors.name
        break
    }

    eventBus.emit("cloudinary.apply-transformation", { transformation, transformationArguments })
  }

  function onColorChangeByIndex(inputIndex, value, attribute) {
    let newColors = structuredClone(colors)
    newColors[inputIndex][attribute] = value
    setColors([...newColors])
  }

  useEffect(() => {
    document.querySelector("#blend-strength-range").value = 50
    colors.forEach(color => (document.querySelector(`#${color.name}`).value = "#ffffff"))
    let firstColorCheckbox = document.querySelector(`#${colors[0].name}-checkbox`)
    firstColorCheckbox.checked = true
    firstColorCheckbox.disabled = true
  }, [])

  return (
    <form className="w-full" onSubmit={submit}>
      <div className="w-full flex flex-col">
        <h6 className={effectControlsStyles.inputContainerTitleText}>Intensidad de la mezcla</h6>
        <div className="flex flex-col items-end mb-6 xl:mb-8">
          <p className={effectControlsStyles.inputRangeText}>{blendStrength}</p>
          <input
            min="0"
            max="100"
            step="10"
            type="range"
            list="markers"
            id="blend-strength-range"
            className={`${effectControlsStyles.inputRangeHeight} w-full accent-high-700`}
            onChange={event => setBlendStrength(event.target.value)}
          />
          <datalist id="markers" className="mt-2">
            {BLEND_STRENGTH_VALUES.map(value => (
              <option key={value} value={value} />
            ))}
          </datalist>
        </div>
        <h6 className={effectControlsStyles.inputContainerTitleText}>Colores a mezclar</h6>
        {colors.map((color, index) => (
          // className={`flex justify-start items-center gap-x-6 ${index !== 2 && "mb-4"}`}
          <div key={index} className={`flex justify-start items-center gap-x-3 xl:gap-x-6 ${effectControlsStyles.inputContainerMargin}`}>
            <input
              type="checkbox"
              id={`${color.name}-checkbox`}
              className="checkbox-sm lg:checkbox-md checkbox-high"
              onChange={event => onColorChangeByIndex(index, event.target.checked, "active")}
            />
            <label htmlFor={color.name} className={`label-sm lg:label-md ${color.active ? "text-headline-950" : "text-headline-500"}`}>
              {color.label}
            </label>
            <input
              type="color"
              id={color.name}
              disabled={!color.active}
              onChange={event => onColorChangeByIndex(index, event.target.value, "value")}
              className={effectControlsStyles.colorPicker}
            />
          </div>
        ))}
        <button type="submit" className={`btn-sm xl:btn-md btn-high w-fit ${effectControlsStyles.applyEffectButtonMargin}`}>
          Aplicar efecto
        </button>
      </div>
    </form>
  )
}

export { Tint }
