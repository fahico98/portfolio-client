import javascriptImage from "@/assets/images/technologies/javascript.png"
import cloudinaryImage from "@/assets/images/technologies/cloudinary.png"
import bootstrapImage from "@/assets/images/technologies/bootstrap.png"
import tailwindImage from "@/assets/images/technologies/tailwind.png"
import mongodbImage from "@/assets/images/technologies/mongodb.png"
import laravelImage from "@/assets/images/technologies/laravel.png"
import matlabImage from "@/assets/images/technologies/matlab.png"
import dockerImage from "@/assets/images/technologies/docker.png"
import reactImage from "@/assets/images/technologies/react.png"
import mysqlImage from "@/assets/images/technologies/mysql.png"
import figmaImage from "@/assets/images/technologies/figma.png"
import javaImage from "@/assets/images/technologies/java.png"
import htmlImage from "@/assets/images/technologies/html.png"
import cssImage from "@/assets/images/technologies/css.png"
import phpImage from "@/assets/images/technologies/php.png"
import vueImage from "@/assets/images/technologies/vue.png"
import styles from "@/components/home/Tools.module.css"
import { useScrollspy } from "@/hooks/useScrollspy.js"

function Tools() {
  const imagesPath = "/src/assets/images/technologies/"
  const scrollspy = new useScrollspy()

  const TOOLS = [
    {
      label: "HTML",
      image: htmlImage,
      activeColorClass: "active:bg-[#f6c8b2]",
      hoverColorClass: "hover:bg-[#fbe5d9]",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      label: "CSS",
      image: cssImage,
      activeColorClass: "active:bg-[#96bafa]",
      hoverColorClass: "hover:bg-[#c1d5fc]",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      label: "JavaScript",
      image: javascriptImage,
      activeColorClass: "active:bg-[#f6ed92]",
      hoverColorClass: "hover:bg-[#faf7c7]",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      label: "PHP",
      image: phpImage,
      activeColorClass: "active:bg-[#a6b0d3]",
      hoverColorClass: "hover:bg-[#c0cae1]",
      url: "https://www.php.net/"
    },
    {
      label: "Java",
      image: javaImage,
      activeColorClass: "active:bg-[#ffa2a3]",
      hoverColorClass: "hover:bg-[#ffc9ca]",
      url: "https://docs.oracle.com/en/java/javase/21/"
    },
    {
      label: "MatLab",
      image: matlabImage,
      activeColorClass: "active:bg-[#fbbf76]",
      hoverColorClass: "hover:bg-[#fddaab]",
      url: "https://www.mathworks.com/help/matlab/"
    },
    {
      label: "MySQL",
      image: mysqlImage,
      activeColorClass: "active:bg-[#ffda88]",
      hoverColorClass: "hover:bg-[#ffeec6]",
      url: "https://dev.mysql.com/doc/"
    },
    {
      label: "MongoDB",
      image: mongodbImage,
      activeColorClass: "active:bg-[#a1de97]",
      hoverColorClass: "hover:bg-[#cbedc5]",
      url: "https://www.mongodb.com/es"
    },
    {
      label: "Tailwind CSS",
      image: tailwindImage,
      activeColorClass: "active:bg-[#7dd5fc]",
      hoverColorClass: "hover:bg-[#bae8fd]",
      url: "https://tailwindcss.com/"
    },
    {
      label: "Bootstrap CSS",
      image: bootstrapImage,
      activeColorClass: "active:bg-[#c1a9ff]",
      hoverColorClass: "hover:bg-[#dbcfff]",
      url: "https://getbootstrap.com/"
    },
    {
      label: "Vue.js",
      image: vueImage,
      activeColorClass: "active:bg-[#b1e9ca]",
      hoverColorClass: "hover:bg-[#d6f5e3]",
      url: "https://vuejs.org/"
    },
    {
      label: "React.js",
      image: reactImage,
      activeColorClass: "active:bg-[#a4ebfd]",
      hoverColorClass: "hover:bg-[#cef6ff]",
      url: "https://react.dev/"
    },
    {
      label: "Laravel",
      image: laravelImage,
      activeColorClass: "active:bg-[#ffc8c5]",
      hoverColorClass: "hover:bg-[#ffe1df]",
      url: "https://laravel.com/"
    },
    {
      label: "Figma",
      image: figmaImage,
      activeColorClass: "active:bg-[#ffcdc7]",
      hoverColorClass: "hover:bg-[#ffe4e1]",
      url: "https://www.figma.com/"
    },
    {
      label: "Cloudinary",
      image: cloudinaryImage,
      activeColorClass: "active:bg-[#a0bcf0]",
      hoverColorClass: "hover:bg-[#c6d6f7]",
      url: "https://cloudinary.com/"
    },
    {
      label: "Docker",
      image: dockerImage,
      activeColorClass: "active:bg-[#75ceff]",
      hoverColorClass: "hover:bg-[#b6e3ff]",
      url: "https://www.docker.com/"
    }
  ]

  function goToUrl(url) {
    window.open(url, "_blank")
  }

  return (
    <div className="home-section-mt" id={styles.tools}>
      <h2 className="home-section-title" id={scrollspy.links.tools.sectionId}>
        {scrollspy.links.tools.label}
      </h2>
      <div>
        {TOOLS.map((tool, index) => {
          return (
            <button type="button" key={index} className={`bg-white ${tool.hoverColorClass} ${tool.activeColorClass}`} onClick={() => goToUrl(tool.url)}>
              <div>
                <img src={tool.image} alt={tool.label} />
                <p>{tool.label}</p>
              </div>
              <div>
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { Tools }
