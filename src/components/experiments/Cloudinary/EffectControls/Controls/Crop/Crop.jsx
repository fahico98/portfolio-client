import styles from "@/components/experiments/Cloudinary/EffectControls/Controls/Crop/Crop.module.css"
import eventBus from "@/libs/mitt.js"
import { useState } from "react"

function Crop() {
  const [aiFaceDetection, setAiFaceDetection] = useState(false)

  function submit(event) {
    event.preventDefault()
    eventBus.emit("cloudinary.apply-transformation", {
      transformation: aiFaceDetection ? "t_portfolio_crop_faces" : "t_portfolio_crop",
      transformationArguments: ""
    })
  }

  return (
    <form onSubmit={submit} id={styles.crop}>
      <div>
        <div>
          <input type="checkbox" id="face-ai-checkbox" className="checkbox-md checkbox-high" onChange={event => setAiFaceDetection(event.target.checked)} />
          <label htmlFor="face-ai-checkbox" className="label-md label-headline w-fit ml-3">
            Identificar rostors con inteligencia artificial.
          </label>
        </div>
        <button type="submit" className="btn-md btn-high w-fit">
          Aplicar efecto
        </button>
      </div>
    </form>
  )
}

export { Crop }
