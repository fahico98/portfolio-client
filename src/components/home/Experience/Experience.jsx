import { Timeline } from "@/components/home/Experience/Timeline/Timeline.jsx"
import styles from "@/components/home/Experience/Experience.module.css"
import { useScrollspy } from "@/hooks/useScrollspy.js"

function Experience() {
  const scrollspy = new useScrollspy()

  return (
    <div id={styles.experience}>
      <div>
        <h2 id={scrollspy.links.experience.sectionId}>{scrollspy.links.experience.label}</h2>
      </div>
      <div>
        <Timeline />
      </div>
    </div>
  )
}

export { Experience }
