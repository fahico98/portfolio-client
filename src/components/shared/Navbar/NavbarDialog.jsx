import { useSearchParams, useLocation, useNavigate } from "react-router-dom"
import cvDocument from "@/assets/documents/FAHIBRAM-CARCAMO-CV-2024-ES.pdf"
import { Popover, Transition } from "@headlessui/react"
import { useScrollspy } from "@/hooks/useScrollspy.js"
import PropTypes from "prop-types"
import { useRef } from "react"

function NavbarDialog({ transparentNavbar }) {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const scrollspy = new useScrollspy()

  const popoverButton = useRef(null)
  const downloadLink = useRef(null)

  const NAVBAR_DIALOG_LINKS = scrollspy.linksArray

  const NAVBAR_DIALOG_LINK_BUTTON_CLASSES =
    "w-full text-start text-xs sm:text-base font-mono font-normal text-high-700 cursor-pointer hover:bg-high-50 focus:text-high-700 focus:bg-high-50 focus:outline-none active:bg-high-100 px-4" +
    " py-1 sm:py-2"

  const POPOVER_PANEL_CLASSES =
    "w-screen xs:w-60 bg-white absolute top-[2.75rem] xs:top-[3.5rem] sm:top-[4.5rem] right-[-0.5rem] xs:right-0 sm:right-[-0.5rem] md:right-[-1.5rem] rounded-xl drop-shadow-lg border-2 border-headline-200 z-10"

  const SOCIAL_MEDIA_LINKS = [
    { iconClass: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/fahico98/" },
    { iconClass: "twitter-x", title: "X", url: "https://twitter.com/fahico98" },
    { iconClass: "github", title: "GitHub", url: "https://github.com/fahico98" }
  ]

  function scrollToSection(sectionPath) {
    if (location.pathname === "/") {
      let currentSectionPath = searchParams.get("seccion")
      if (currentSectionPath && currentSectionPath === sectionPath) {
        let currentLink = NAVBAR_DIALOG_LINKS.find(link => link.sectionPath === currentSectionPath)
        if (currentLink) scrollspy.scrollToSection(currentLink.sectionId)
      } else {
        setSearchParams({ seccion: sectionPath })
      }
    } else {
      navigate(`/?seccion=${sectionPath}`)
    }

    popoverButton.current.click()
  }

  function openSocialInNewTab(event, url) {
    event.preventDefault()
    popoverButton.current.click()
    window.open(url, "_blank")
  }

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button ref={popoverButton} className={`btn-icon-sm sm:btn-icon-md ${transparentNavbar ? "btn-icon-white" : "btn-icon-high"}`}>
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
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
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-col gap-y-1 py-4">
                  {NAVBAR_DIALOG_LINKS.map((link, index) => (
                    <button className={NAVBAR_DIALOG_LINK_BUTTON_CLASSES} type="button" key={index} onClick={() => scrollToSection(link.sectionPath)}>
                      {link.label}
                    </button>
                  ))}
                </div>
                <hr className="block sm:hidden" />
                <div className="block sm:hidden p-4 w-full">
                  <button type="button" className="btn-sm btn-transparent-high w-full" onClick={() => downloadLink.current.click()}>
                    Descargar CV&nbsp;<i className="bi bi-download"></i>
                  </button>
                  <a href={cvDocument} download ref={downloadLink} className="hidden">
                    download
                  </a>
                </div>
                <hr />
                <div className="w-full flex justify-start items-center gap-x-3 p-4">
                  {SOCIAL_MEDIA_LINKS.map((social, index) => (
                    <button
                      type="button"
                      className="btn-icon-sm sm:btn-icon-md btn-icon-high"
                      title={social.title}
                      key={index}
                      onClick={event => openSocialInNewTab(event, social.url)}
                    >
                      <i className={`bi bi-${social.iconClass}`}></i>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

NavbarDialog.propTypes = { transparentNavbar: PropTypes.bool.isRequired }

export { NavbarDialog }
