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
        "Recorte una porción rectangular de su imagen especificando la posición y las dimensiones del recorte. Puede realizar el recorte reconociendo rostros " +
        "de personas con inteligencia artificial."
    },
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
      <Popover.Button ref={popoverButton} className="btn-sm xl:btn-md btn-high w-full md:w-fit" disabled={!imageUploaded}>
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
        <Popover.Panel className="w-[30rem] h-72 overflow-y-auto bg-white absolute top-[2.2rem] xl:top-[3.2rem] left-0 rounded-xl drop-shadow-lg transition duration-300 border-2 border-headline-200 z-[1]">
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-y-1 py-2 xl:py-3">
              {EFFECTS.map((effect, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleImageEffectSelection(effect)}
                  className="w-full text-start cursor-pointer hover:bg-high-50 focus:bg-high-50 focus:outline-none active:bg-high-100 px-3 xl:px-4 py-1.5 xl:py-2"
                >
                  <p className="font-sans text-high-700 text-sm xl:text-base font-medium mb-1">{effect.label}</p>
                  <p className="help-sm xl:help-md help-headline">{effect.description}</p>
                </button>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export { EffectSelector }
