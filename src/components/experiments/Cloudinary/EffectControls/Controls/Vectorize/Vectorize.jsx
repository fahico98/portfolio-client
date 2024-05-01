import styles from "@/components/experiments/Cloudinary/EffectControls/Controls/Vectorize/Vectorize.module.css"
import { range } from "@/utils/globalFunctions.js"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

function Vectorize() {
  const [numberOfColors, setNumberOfColors] = useState(10)
  const [detailPercentage, setDetailPercentage] = useState(30)

  const NUMBER_OF_COLORS = range(2, 30)
  const DETAIL_PERCENTAGES = range(0, 100, 10)

  function submit(event) {
    event.preventDefault()
    eventBus.emit("cloudinary.apply-transformation", {
      transformation: "t_portfolio_vectorize",
      transformationArguments: `$colors_${numberOfColors},$detail_${detailPercentage === 0 ? 5 : detailPercentage * 10}`
    })
  }

  useEffect(() => {
    document.querySelector("#number-of-colors-range").value = 10
    document.querySelector("#detail-percentages-range").value = 30
  }, [])

  return (
    <form id={styles.vectorize} onSubmit={submit}>
      <div>
        <h6 className={styles.title}>Número de colores</h6>
        <div>
          <p>{numberOfColors}</p>
          <input
            min="2"
            max="30"
            step="1"
            type="range"
            id="number-of-colors-range"
            list="number-of-colors-markers"
            className="w-full accent-high-700"
            onChange={event => setNumberOfColors(parseInt(event.target.value))}
          />
          <datalist id="number-of-colors-markers" className="mt-2">
            {NUMBER_OF_COLORS.map(value => (
              <option key={value} value={value} />
            ))}
          </datalist>
        </div>
        <h6 className={styles.title}>Porcentaje de detalle</h6>
        <div>
          <p>{detailPercentage}%</p>
          <input
            min="0"
            max="100"
            step="10"
            type="range"
            id="detail-percentages-range"
            list="detail-percentages-markers"
            className="w-full accent-high-700"
            onChange={event => setDetailPercentage(parseInt(event.target.value))}
          />
          <datalist id="detail-percentages-markers" className="mt-2">
            {DETAIL_PERCENTAGES.map(value => (
              <option key={value} value={value} />
            ))}
          </datalist>
        </div>
        <button type="submit" className="btn-high btn-md w-fit">
          Aplicar efecto
        </button>
      </div>
    </form>
  )
}

export { Vectorize }
