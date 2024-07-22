import { Timeline } from "@/components/home/Timeline.jsx"
import { useScrollspy } from "@/hooks/useScrollspy.js"

function Experience() {
  const scrollspy = new useScrollspy()

  return (
    <div className="grid grid-cols-3 gap-x-8 home-section-mt">
      <div className="w-full col-span-3 xl:col-span-1">
        <h2 className="home-section-title" id={scrollspy.links.experience.sectionId}>
          {scrollspy.links.experience.label}
        </h2>
      </div>
      <div className="col-span-3 xl:col-span-2">
        <Timeline />
      </div>
    </div>
  )
}

export { Experience }
