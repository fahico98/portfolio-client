import styles from "@/components/experiments/Cloudinary/EffectSelector/EffectSelector.module.css"
import { Popover, Transition } from "@headlessui/react"
import { useEffect, useRef, useState } from "react"
import eventBus from "@/libs/mitt.js"

function EffectSelector() {
  const [imageUploaded, setImageUploaded] = useState(false)
  const popoverButton = useRef(null)

  const EFFECTS = [
    {
      name: "tint",
      label: "Teñir",
      description: "Mezcle su imagen con hasta tres colores diferentes y especifique la intensidad de la mezcla."
    },
    {
      name: "crop",
      label: "Recortar",
      description:
        "Recorte una porción rectangular de su imagen especificando la posición y las dimensiones del recorte. Si en su imagen aparecen una o varias personas, " +
        "puede realizar el recorte reconociendo sus rostros con inteligencia artificial."
    },
    {
      name: "color-replacement",
      label: "Reemplazo de color",
      description:
        "Reemplace un color por otro dentro de la imagen aplicando un porcentaje de tolerancia que representa un radio en el espacio de color LAB, para que " +
        "también se reemplacen tonos similares."
    },
    {
      name: "vectorize",
      label: "Vectorizar",
      description: "Esta obra filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros."
    },
    {
      name: "artistic-filters",
      label: "Filtros artísticos",
      description: "Esta obra filosófica, también conocida como En los extremos del bien y del mal, se dividió en cinco libros."
    }
  ]

  function handleImageEffectSelection(effect) {
    eventBus.emit("cloudinary.change-effect", { effect })
    popoverButton.current.click()
  }

  useEffect(() => {
    eventBus.on("cloudinary.image-uploaded", () => setImageUploaded(true))
    return () => eventBus.off("cloudinary.image-uploaded")
  }, [])

  return (
    <Popover>
      <Popover.Button ref={popoverButton} className="btn-md btn-transparent-high w-fit" disabled={!imageUploaded}>
        Seleccionar efecto&nbsp;<i className="bi bi-chevron-down"></i>
      </Popover.Button>
      <Transition
        enter="transition-opaticty duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opaticty duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel id={styles.popoverContainer}>
          <div>
            <div>
              {EFFECTS.map((effect, index) => {
                return (
                  <button type="button" key={index} onClick={() => handleImageEffectSelection(effect)}>
                    <p>{effect.label}</p>
                    <p className="help-md help-headline">{effect.description}</p>
                  </button>
                )
              })}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export { EffectSelector }
