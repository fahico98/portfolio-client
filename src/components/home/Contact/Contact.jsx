import styles from "@/components/home/Contact/Contact.module.css"
import { useScrollspy } from "@/hooks/useScrollspy.js"

function Contact() {
  const scrollspy = new useScrollspy()

  function submit(event) {
    event.preventDefault()
    console.log("Submit...")
  }

  return (
    <div id={styles.contact}>
      <div>
        <h2 id={scrollspy.links.contact.sectionId}>{scrollspy.links.contact.label}</h2>
        <form onSubmit={submit}>
          <div>
            <label htmlFor="name" className="label-md label-headline w-fit mb-1 ml-2">
              Nombre
            </label>
            <input id="name" type="text" className="input-md input-high" />
          </div>
          <div>
            <label htmlFor="email" className="label-md label-headline w-fit mb-1 ml-2">
              Correo electrónico
            </label>
            <input id="email" type="text" className="input-md input-high" />
          </div>
          <div>
            <label htmlFor="message" className="label-md label-headline w-fit mb-1 ml-2">
              Mensaje
            </label>
            <textarea id="message" className="input-md input-high resize-none" rows="5" />
          </div>
          <button type="submit" className="btn-md btn-high w-fit">
            Enviar&nbsp;<i className="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export { Contact }
