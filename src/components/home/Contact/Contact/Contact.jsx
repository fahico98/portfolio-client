import { ContactModal } from "@/components/home/Contact/ContactModal.jsx"
import { validateContactForm } from "@/utils/contactFormValidation.js"
import { useScrollspy } from "@/hooks/useScrollspy.js"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
  const [modalOpeningTrigger, setModalOpeningTrigger] = useState(0)
  const [formValidationObj, setFormValidationObj] = useState({ name: false, email: false, message: false })
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [modalStatus, setModalStatus] = useState("success")
  const [isLoading, setIsLoading] = useState(false)

  const scrollspy = new useScrollspy()

  const htmlForm = useRef(null)

  function handleFormInputChange(event) {
    let tempForm = { ...form }
    tempForm[event.target.id] = event.target.value
    setForm({ ...tempForm })
  }

  async function submit(event) {
    event.preventDefault()

    let tempFormValidationObj = validateContactForm({ ...form })
    setFormValidationObj({ ...tempFormValidationObj })

    let formIsValid = Object.values(tempFormValidationObj).every(value => !value)

    if (formIsValid) {
      setIsLoading(true)

      await emailjs
        .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, htmlForm.current, {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        })
        .then(
          () => {
            setModalStatus("success")
            setModalOpeningTrigger(modalOpeningTrigger + 1)
          },
          () => {
            setModalStatus("error")
            setModalOpeningTrigger(modalOpeningTrigger + 1)
          }
        )

      setIsLoading(false)
    }
  }

  return (
    <div className="home-section-mt w-full flex justify-center items-start mb-20 sm:mb-40 md:mb-60">
      <div className="w-full sm:w-3/4 md:w-1/2">
        <h2 className="home-section-title" id={scrollspy.links.contact.sectionId}>
          {scrollspy.links.contact.label}
        </h2>
        <form className="w-full flex flex-col gap-y-4 sm:gap-y-6" ref={htmlForm} onSubmit={submit}>
          <div className="w-full">
            <label htmlFor="name" className={`${formValidationObj.name ? "label-error" : "label-headline"} label-sm sm:label-md w-fit mb-1 ml-2`}>
              Nombre
            </label>
            <input
              id="name"
              name="from_name"
              type="text"
              className={`${formValidationObj.name ? "input-error" : "input-high"} input-sm sm:input-md`}
              onInput={handleFormInputChange}
            />
            {formValidationObj.name ? (
              <p className="help-error help-md ml-2">
                <i className="bi bi-x-octagon mr-1 mt-1" />
                {formValidationObj.name}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="email" className={`${formValidationObj.email ? "label-error" : "label-headline"} label-sm sm:label-md w-fit mb-1 ml-2`}>
              Correo electrónico
            </label>
            <input
              id="email"
              name="from_email"
              type="text"
              className={`${formValidationObj.email ? "input-error" : "input-high"} input-sm sm:input-md`}
              onInput={handleFormInputChange}
            />
            {formValidationObj.email ? (
              <p className="help-error help-md ml-2">
                <i className="bi bi-x-octagon mr-1 mt-1" />
                {formValidationObj.email}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="message" className={`${formValidationObj.message ? "label-error" : "label-headline"} label-sm sm:label-md w-fit mb-1 ml-2`}>
              Mensaje
            </label>
            <textarea
              rows="5"
              id="message"
              name="message"
              className={`${formValidationObj.message ? "input-error" : "input-high"} input-sm sm:input-md resize-none`}
              onInput={handleFormInputChange}
            />
            {formValidationObj.message ? (
              <p className="help-error help-md ml-2">
                <i className="bi bi-x-octagon mr-1 mt-1" />
                {formValidationObj.message}
              </p>
            ) : (
              ""
            )}
          </div>
          <button type="submit" className="btn-sm sm:btn-md btn-high w-fit">
            {isLoading ? (
              <span>Cargando...</span>
            ) : (
              <span>
                Enviar&nbsp;<i className="bi bi-send"></i>
              </span>
            )}
          </button>
        </form>
        <ContactModal modalOpeningTrigger={modalOpeningTrigger} status={modalStatus} />
      </div>
    </div>
  )
}

export { Contact }
