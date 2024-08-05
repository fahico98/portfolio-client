import emailSuccessImage from "@/assets/images/email-success.png"
import emailFailImage from "@/assets/images/email-fail.png"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import PropTypes from "prop-types"

export default function ContactModal({ modalOpeningTrigger, status }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    if (modalOpeningTrigger > 0) openModal()
  }, [modalOpeningTrigger])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="transition-opaticty duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opaticty duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="transition-opaticty duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opaticty duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="w-[36rem] transform overflow-hidden rounded-xl bg-white p-3 text-left align-middle drop-shadow-lg border-2 border-headline-200 transition-all">
                {/*<div className="w-full flex justify-end items-center">*/}
                {/*  <button type="button" className="bg-transparent" onClick={closeModal}>*/}
                {/*    <i className="text-headline-200 hover:text-headline-300 text-base bi bi-x-lg" />*/}
                {/*  </button>*/}
                {/*</div>*/}
                <div className="w-full flex flex-col justify-center items-center py-0 xs:py-4 lg:py-6 px-0 xs:px-6 lg:px-10 h-auto gap-y-6">
                  {status === "success" ? (
                    <>
                      <p className="home-section-text text-center">
                        Tu mensaje ha sido enviado satisfactoriamente por correo electrónico a mi bandeja de entrada personal.
                      </p>
                      <img src={emailSuccessImage} alt="Email image" className="w-[14rem] object-contain" />
                      <p className="home-section-text text-center">
                        Pronto recibirás una respuesta.
                        <br />
                        Gracias por escribir.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="home-section-text text-center">Ha ocurrido un error al tratar de enviar tu mensaje por correo electrónico.</p>
                      <img src={emailFailImage} alt="Email image" className="w-[14rem] object-contain" />
                      <p className="home-section-text text-center">Por favor revisa los datos que ingresaste en el formulario y vuelve a intentarlo.</p>
                    </>
                  )}
                  <button type="button" className="btn-sm sm:btn-md btn-high" onClick={closeModal}>
                    Aceptar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

ContactModal.propTypes = {
  modalOpeningTrigger: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
}

export { ContactModal }
