import styles from "@/components/shared/Navbar/NavbarDialog/NavbarDialog.module.css"
import { Popover, Transition } from "@headlessui/react"
import { useScrollspy } from "@/hooks/useScrollspy.js"
import PropTypes from "prop-types"
import { useRef } from "react"

function NavbarDialog({ transparentNavbar }) {
  const popoverButton = useRef(null)
  const scrollspy = new useScrollspy()
  const links = scrollspy.linksArray

  const socials = [
    { iconClass: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/fahico98/" },
    { iconClass: "twitter-x", title: "X", url: "https://twitter.com/fahico98" },
    { iconClass: "github", title: "GitHub", url: "https://github.com/fahico98" }
  ]

  function scrollToSection(event, sectionId) {
    scrollspy.scrollToSection(event, sectionId)
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
          <Popover.Button ref={popoverButton} className={`btn-icon-md ${transparentNavbar ? "btn-icon-white" : "btn-icon-high"}`}>
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
            <Popover.Panel id={styles.dialogContainer}>
              <div>
                <div>
                  {links.map((link, index) => (
                    <button type="button" key={index} onClick={event => scrollToSection(event, link.sectionId)}>
                      {link.label}
                    </button>
                  ))}
                </div>
                <hr />
                <div>
                  {socials.map((social, index) => (
                    <button
                      type="button"
                      className="btn-icon-md btn-icon-high"
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
