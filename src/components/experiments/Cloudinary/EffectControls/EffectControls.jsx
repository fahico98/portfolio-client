import { ColorReplacement } from "@/components/experiments/Cloudinary/EffectControls/Controls/ColorReplacement/ColorReplacement.jsx"
import { ArtisticFilters } from "@/components/experiments/Cloudinary/EffectControls/Controls/ArtisticFilters/ArtisticFilters.jsx"
import { Vectorize } from "@/components/experiments/Cloudinary/EffectControls/Controls/Vectorize/Vectorize.jsx"
import styles from "@/components/experiments/Cloudinary/EffectControls/EffectControls.module.css"
import { Crop } from "@/components/experiments/Cloudinary/EffectControls/Controls/Crop/Crop.jsx"
import { Tint } from "@/components/experiments/Cloudinary/EffectControls/Controls/Tint/Tint.jsx"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

function EffectControls() {
  const [effectName, setEffectName] = useState("")

  function controlContent() {
    switch (effectName) {
      case "tint":
        return <Tint />
      case "crop":
        return <Crop />
      case "color-replacement":
        return <ColorReplacement />
      case "vectorize":
        return <Vectorize />
      case "artistic-filters":
        return <ArtisticFilters />
      default:
        return (
          <div id={styles.effectControlsContainer}>
            <i className="bi bi-hand-index"></i>
            <p>Selecciona el efecto que quieras aplicar a tu imágen</p>
          </div>
        )
    }
  }

  useEffect(() => {
    eventBus.on("cloudinary.change-effect", ({ effect }) => setEffectName(effect.name))
    eventBus.on("cloudinary.original-image-selected", () => setEffectName(""))

    return () => {
      eventBus.off("cloudinary.change-effect")
      eventBus.off("cloudinary.original-image-selected")
    }
  }, [])

  return <div id={styles.effectControls}>{controlContent()}</div>
}

export { EffectControls }
