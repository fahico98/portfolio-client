import { Experiments } from "@/components/home/Experiments.jsx"
import { Experience } from "@/components/home/Experience.jsx"
import { AboutMe } from "@/components/home/AboutMe.jsx"
import { Contact } from "@/components/home/Contact/Contact/Contact.jsx"
import { Tools } from "@/components/home/Tools.jsx"
import { Hero } from "@/components/home/Hero.jsx"
import { useScrollspy } from "@/hooks/useScrollspy.js"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

function Home() {
  const [searchParams] = useSearchParams()
  const scrollspy = new useScrollspy()
  const links = scrollspy.linksArray

  useEffect(() => {
    let sectionPath = searchParams.get("seccion")
    let link = links.find(link => link.sectionPath === sectionPath)
    if (link) scrollspy.scrollToSection(link.sectionId)
  }, [searchParams])

  return (
    <div className="view-wrapper">
      <Hero />
      <div className="padding-x max-width w-full">
        <AboutMe />
        <Experience />
        <Tools />
        <Experiments />
        <Contact />
      </div>
    </div>
  )
}

export { Home }
