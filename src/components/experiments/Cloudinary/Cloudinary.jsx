import { ImageDeliverer } from "@/components/experiments/Cloudinary/ImageDeliverer/ImageDeliverer.jsx"
import { EffectSelector } from "@/components/experiments/Cloudinary/EffectSelector/EffectSelector.jsx"
import { EffectControls } from "@/components/experiments/Cloudinary/EffectControls/EffectControls.jsx"
import styles from "@/components/experiments/Cloudinary/Cloudinary.module.css"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

function Cloudinary() {
  const [effect, setEffect] = useState(null)

  function updateImageEffect(effect) {
    setEffect({ ...effect })
  }

  useEffect(() => {
    eventBus.on("cloudinary.change-effect", ({ effect }) => setEffect({ ...effect }))
    eventBus.on("cloudinary.original-image-selected", () => setEffect(null))

    return () => {
      eventBus.off("cloudinary.change-effect")
      eventBus.off("cloudinary.original-image-selected")
    }
  }, [])

  return (
    <div id={styles.cloudinary}>
      <div>
        <EffectSelector updateImageEffect={updateImageEffect} />
        {effect && (
          <div id={styles.headerContainer}>
            <h5>{effect.label}</h5>
            <p>{effect.description}</p>
          </div>
        )}
        <EffectControls effect={effect} />
      </div>
      <div>
        <ImageDeliverer />
      </div>
    </div>
  )
}

export { Cloudinary }
