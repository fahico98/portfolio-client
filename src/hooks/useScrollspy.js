export function useScrollspy() {
  const links = {
    aboutMe: { label: "Sobre mí", sectionPath: "sobre-mi", sectionId: "about-me" },
    experience: { label: "Experiencia", sectionPath: "experiencia", sectionId: "experience" },
    tools: { label: "Herramientas", sectionPath: "herramientas", sectionId: "tools" },
    experiments: { label: "Experimentos", sectionPath: "experimentos", sectionId: "experiments" },
    contact: { label: "Contacto", sectionPath: "contacto", sectionId: "contact" }
  }

  const linksArray = Object.values(links)
  const marginTop = 120

  function scrollToSection(sectionId) {
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
