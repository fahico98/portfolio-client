import { Experiments } from "@/components/home/Experiments/Experiments.jsx"
import { Experience } from "@/components/home/Experience/Experience.jsx"
import { AboutMe } from "@/components/home/AboutMe/AboutMe.jsx"
import { Contact } from "@/components/home/Contact/Contact.jsx"
import { Tools } from "@/components/home/Tools/Tools.jsx"
import { Hero } from "@/components/home/Hero/Hero.jsx"

function Home() {
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
