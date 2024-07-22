import { ColorReplacement } from "@/components/experiments/Cloudinary/EffectControls/ColorReplacement.jsx"
import { ArtisticFilters } from "@/components/experiments/Cloudinary/EffectControls/ArtisticFilters.jsx"
import { Vectorize } from "@/components/experiments/Cloudinary/EffectControls/Vectorize.jsx"
// import { Crop } from "@/components/experiments/Cloudinary/EffectControls/Crop.jsx"
import { Tint } from "@/components/experiments/Cloudinary/EffectControls/Tint.jsx"
import effectControlsStyles from "@/styles/modules/EffectControls.module.css"
import { Popover, Transition } from "@headlessui/react"
import { useEffect, useRef, useState } from "react"
import eventBus from "@/libs/mitt.js"

function ModalEffectControls() {
  const [selectedEffectName, setSelectedEffectName] = useState("")
  const [imageUploaded, setImageUploaded] = useState(false)
  const [selectedEffect, setSelectedEffect] = useState(null)

  const popoverButton = useRef(null)

  const POPOVER_PANEL_CLASSES = "w-screen h-screen bg-white absolute top-0 right-0 rounded-xl drop-shadow-lg border-2 border-headline-200 z-[11]"

  const EFFECTS = [
    {
      name: "tint",
      label: "Teñir",
      description: "Mezcle su imagen con hasta tres colores diferentes y especifique la intensidad de la mezcla."
    },
    // {
    //   name: "crop",
    //   label: "Recortar",
    //   description:
    //     "Recorte una porción rectangular de su imagen especificando la posición y las dimensiones del recorte. Puede realizar el recorte reconociendo rostros " +
    //     "de personas con inteligencia artificial."
    // },
    {
      name: "color-replacement",
      label: "Reemplazo de color",
      description:
        "Reemplace un color por otro dentro de la imagen aplicando un porcentaje de tolerancia, que representa un radio en el espacio de color LAB para que " +
        "también se reemplacen tonos similares."
    },
    {
      name: "vectorize",
      label: "Vectorizar",
      description:
        "Agregue un efecto artístico agradable a su imagen reduciendo el número de colores presentes en ella y/o disminuyendo el porcentaje de detalle de esta."
    },
    {
      name: "artistic-filters",
      label: "Filtros artísticos",
      description: "Aplique cualquiera de los filtros artísticos mas comunes."
    }
  ]

  function handleEffectSelection(event) {
    let selectedEffectObj = EFFECTS.filter(effect => effect.name === event.target.value)[0]

    if (selectedEffectObj) {
      setSelectedEffectName(selectedEffectObj.name)
      setSelectedEffect({ ...selectedEffectObj })
    }
  }

  useEffect(() => {
    eventBus.on("cloudinary.image-uploaded", () => setImageUploaded(true))
    eventBus.on("cloudinary.apply-transformation", ({ transformation, transformationArguments }) => {
      if (transformation && transformationArguments) popoverButton.current.click()
    })
    return () => {
      eventBus.off("cloudinary.image-uploaded")
      eventBus.off("cloudinary.apply-transformation")
    }
  }, [])

  function controlContent() {
    switch (selectedEffectName) {
      case "tint":
        return <Tint />
      // case "crop":
      //   return <Crop embeddedImageCropper={true} />
      case "color-replacement":
        return <ColorReplacement />
      case "vectorize":
        return <Vectorize />
      case "artistic-filters":
        return <ArtisticFilters />
      default:
        return (
          <>
            <div className="w-full h-full bg-transparent flex flex-col">
              <div className="flex flex-col justify-center items-center grow">
                <p className="text-lg lg:text-3xl text-headline-200 font-sans select-none text-center">
                  <i className="bi bi-scissors mr-2"></i>
                  <i className="bi bi-palette"></i>
                </p>
                <p className="text-lg lg:text-3xl text-headline-200 font-sans select-none text-center">
                  <i className="bi bi-transparency mr-2"></i>
                  <i className="bi bi-palette2"></i>
                </p>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <Popover>
      {() => (
        <>
          <Popover.Button ref={popoverButton} className="btn-sm btn-high w-full" disabled={!imageUploaded}>
            <span className="hidden sm:block">Efecto</span>
            <i className="block sm:hidden bi bi-pencil-square" />
          </Popover.Button>

          <Transition
            enter="transition-opaticty duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opaticty duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className={POPOVER_PANEL_CLASSES}>
              <div className="w-full h-full py-4 bg-transparent flex flex-col gap-y-4">
                <div className="flex justify-start grow-0 w-full px-4 gap-x-2">
                  <div className="w-1/2">
                    <label htmlFor="effect-selector" className="label-sm label-headline w-fit mb-1 ml-2">
                      Efecto
                    </label>
                    <select name="effect-selector" id="effect-selector" className="input-high input-sm" onChange={event => handleEffectSelection(event)}>
                      <option value={null}>Seleccionar...</option>
                      {EFFECTS.map((effect, index) => {
                        return (
                          <option key={index} value={effect.name}>
                            {effect.label}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="w-1/2 flex items-end">
                    <button type="button" className="btn-sm btn-high w-full" onClick={() => popoverButton.current.click()}>
                      Cancelar
                    </button>
                  </div>
                </div>
                <div className="overflow-y-auto grow px-4">
                  {selectedEffect && (
                    <div className={effectControlsStyles.descriptionHeaderContainer}>
                      <h5 className={effectControlsStyles.titleText}>{selectedEffect.label}</h5>
                      <p className={effectControlsStyles.descriptionText}>{selectedEffect.description}</p>
                    </div>
                  )}
                  {controlContent()}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export { ModalEffectControls }
