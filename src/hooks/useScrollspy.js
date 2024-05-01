export function useScrollspy() {
  const links = {
    aboutMe: { label: "Sobre mí", sectionId: "about-me" },
    experience: { label: "Experiencia", sectionId: "experience" },
    tools: { label: "Herramientas", sectionId: "tools" },
    experiments: { label: "Experimentos", sectionId: "experiments" },
    contact: { label: "Contacto", sectionId: "contact" }
  }

  const linksArray = Object.values(links)
  const marginTop = 120

  function scrollToSection(event, sectionId) {
    event.preventDefault()
    const section = document.querySelector(`#${sectionId}`)
    if (section) {
      let yToScroll = section.getBoundingClientRect().top + window.scrollY - marginTop
      window.scrollTo({ top: yToScroll, behavior: "smooth" })
    }
  }

  return {
    links,
    linksArray,
    scrollToSection
  }
}
