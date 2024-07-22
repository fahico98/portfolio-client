import { ColorReplacement } from "@/components/experiments/Cloudinary/EffectControls/ColorReplacement.jsx"
import { ArtisticFilters } from "@/components/experiments/Cloudinary/EffectControls/ArtisticFilters.jsx"
import { Vectorize } from "@/components/experiments/Cloudinary/EffectControls/Vectorize.jsx"
import { Crop } from "@/components/experiments/Cloudinary/EffectControls/Crop.jsx"
import { Tint } from "@/components/experiments/Cloudinary/EffectControls/Tint.jsx"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

function EffectControls() {
  const [selectedEffectName, setSelectedEffectName] = useState("")

  function controlContent() {
    switch (selectedEffectName) {
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
          <div className="px-[20%] mt-2 xl:mt-4 w-full h-full rounded-xl border-2 border-headline-200 flex flex-col justify-center items-center">
            <p className="text-lg lg:text-3xl text-headline-200 font-sans select-none text-center">
              <i className="bi bi-scissors mr-2"></i>
              <i className="bi bi-palette"></i>
            </p>
            <p className="text-lg lg:text-3xl text-headline-200 font-sans select-none text-center">
              <i className="bi bi-transparency mr-2"></i>
              <i className="bi bi-palette2"></i>
            </p>
          </div>
        )
    }
  }

  useEffect(() => {
    eventBus.on("cloudinary.change-effect", ({ effect }) => setSelectedEffectName(effect.name))
    return () => eventBus.off("cloudinary.change-effect")
  }, [])

  return <div className="w-full h-full flex flex-col justify-start items-start">{controlContent()}</div>
}

export { EffectControls }
