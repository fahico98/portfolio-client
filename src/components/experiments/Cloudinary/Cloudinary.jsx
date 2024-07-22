import { ImageDeliverer } from "@/components/experiments/Cloudinary/ImageDeliverer/ImageDeliverer.jsx"
import { EffectControls } from "@/components/experiments/Cloudinary/EffectControls/EffectControls.jsx"
import { EffectSelector } from "@/components/experiments/Cloudinary/EffectSelector.jsx"
import effectControlsStyles from "@/styles/modules/EffectControls.module.css"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

function Cloudinary() {
  const [selectedEffect, setSelectedEffect] = useState(null)

  function updateImageEffect(effect) {
    setSelectedEffect({ ...effect })
  }

  useEffect(() => {
    eventBus.on("cloudinary.change-effect", ({ effect }) => setSelectedEffect({ ...effect }))
    return () => eventBus.off("cloudinary.change-effect")
  }, [])

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 xl:gap-x-4 my-10">
      <div className="col-span-1 hidden md:flex flex-col relative z-[1]">
        <EffectSelector updateImageEffect={updateImageEffect} />
        {selectedEffect && (
          <div className={effectControlsStyles.descriptionHeaderContainer}>
            <h5 className={effectControlsStyles.titleText}>{selectedEffect.label}</h5>
            <p className={effectControlsStyles.descriptionText}>{selectedEffect.description}</p>
          </div>
        )}
        <EffectControls effect={selectedEffect} />
      </div>
      <div className="col-span-1">
        <ImageDeliverer />
      </div>
    </div>
  )
}

export { Cloudinary }
