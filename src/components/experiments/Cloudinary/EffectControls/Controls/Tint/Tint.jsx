import styles from "@/components/experiments/Cloudinary/EffectControls/Controls/Tint/Tint.module.css"
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

    let transformation = "t_portfolio_tint_"

    switch (colorValues.length) {
      case 1:
        transformation += "one_color"
        break
      case 2:
        transformation += "two_colors"
        break
      case 3:
        transformation += "three_colors"
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
    <form onSubmit={submit} id={styles.tint}>
      <div>
        <h6 className={styles.title}>Intensidad de la mezcla</h6>
        <div>
          <p>{blendStrength}</p>
          <input
            min="0"
            max="100"
            step="10"
            type="range"
            list="markers"
            id="blend-strength-range"
            className="w-full accent-high-700"
            onChange={event => setBlendStrength(event.target.value)}
          />
          <datalist id="markers" className="mt-2">
            {BLEND_STRENGTH_VALUES.map(value => (
              <option key={value} value={value} />
            ))}
          </datalist>
        </div>
        <h6 className={`mb-6 ${styles.title}`}>Colores a mezclar</h6>
        {colors.map((color, index) => (
          <div key={index} className={`${index !== 2 && "mb-4"}`}>
            <input
              type="checkbox"
              id={`${color.name}-checkbox`}
              className="checkbox-md checkbox-high"
              onChange={event => onColorChangeByIndex(index, event.target.checked, "active")}
            />
            <label htmlFor={color.name} className={`label-md w-fit ${color.active ? "text-headline-950" : "text-headline-500"}`}>
              {color.label}
            </label>
            <input
              type="color"
              id={color.name}
              disabled={!color.active}
              onChange={event => onColorChangeByIndex(index, event.target.value, "value")}
              className={`${color.active ? "bg-white" : "bg-headline-100"}`}
            />
          </div>
        ))}
        <button type="submit" className="btn-md btn-high w-fit mt-10">
          Aplicar efecto
        </button>
      </div>
    </form>
  )
}

export { Tint }
