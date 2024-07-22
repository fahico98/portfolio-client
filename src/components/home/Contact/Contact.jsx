import { useScrollspy } from "@/hooks/useScrollspy.js"

function Contact() {
  const scrollspy = new useScrollspy()

  function submit(event) {
    event.preventDefault()
    console.log("Submit...")
  }

  return (
    <div className="home-section-mt w-full flex justify-center items-start mb-20 sm:mb-40 md:mb-60">
      <div className="w-full sm:w-3/4 md:w-1/2">
        <h2 className="home-section-title" id={scrollspy.links.contact.sectionId}>
          {scrollspy.links.contact.label}
        </h2>
        <form className="w-full flex flex-col gap-y-4 sm:gap-y-6" onSubmit={submit}>
          <div className="w-full">
            <label htmlFor="name" className="label-sm sm:label-md label-headline w-fit mb-1 ml-2">
              Nombre
            </label>
            <input id="name" type="text" className="input-sm sm:input-md input-high" />
          </div>
          <div>
            <label htmlFor="email" className="label-sm sm:label-md label-headline w-fit mb-1 ml-2">
              Correo electrónico
            </label>
            <input id="email" type="text" className="input-sm sm:input-md input-high" />
          </div>
          <div>
            <label htmlFor="message" className="label-sm sm:label-md label-headline w-fit mb-1 ml-2">
              Mensaje
            </label>
            <textarea id="message" className="input-sm sm:input-md input-high resize-none" rows="5" />
          </div>
          <button type="submit" className="btn-sm sm:btn-md btn-high w-fit">
            Enviar&nbsp;<i className="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export { Contact }
