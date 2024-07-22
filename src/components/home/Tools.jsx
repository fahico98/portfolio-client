import styles from "@/components/home/Tools.module.css"
import { useScrollspy } from "@/hooks/useScrollspy.js"

function Tools() {
  const imagesPath = "/assets/images/technologies/"
  const scrollspy = new useScrollspy()

  const TOOLS = [
    {
      label: "HTML",
      image: "html",
      activeColorClass: "active:bg-[#f6c8b2]",
      hoverColorClass: "hover:bg-[#fbe5d9]",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      label: "CSS",
      image: "css",
      activeColorClass: "active:bg-[#96bafa]",
      hoverColorClass: "hover:bg-[#c1d5fc]",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      label: "JavaScript",
      image: "javascript",
      activeColorClass: "active:bg-[#f6ed92]",
      hoverColorClass: "hover:bg-[#faf7c7]",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      label: "PHP",
      image: "php",
      activeColorClass: "active:bg-[#a6b0d3]",
      hoverColorClass: "hover:bg-[#c0cae1]",
      url: "https://www.php.net/"
    },
    {
      label: "Java",
      image: "java",
      activeColorClass: "active:bg-[#ffa2a3]",
      hoverColorClass: "hover:bg-[#ffc9ca]",
      url: "https://docs.oracle.com/en/java/javase/21/"
    },
    {
      label: "MatLab",
      image: "matlab",
      activeColorClass: "active:bg-[#fbbf76]",
      hoverColorClass: "hover:bg-[#fddaab]",
      url: "https://www.mathworks.com/help/matlab/"
    },
    {
      label: "MySQL",
      image: "mysql",
      activeColorClass: "active:bg-[#ffda88]",
      hoverColorClass: "hover:bg-[#ffeec6]",
      url: "https://dev.mysql.com/doc/"
    },
    {
      label: "MongoDB",
      image: "mongodb",
      activeColorClass: "active:bg-[#a1de97]",
      hoverColorClass: "hover:bg-[#cbedc5]",
      url: "https://www.mongodb.com/es"
    },
    {
      label: "Tailwind CSS",
      image: "tailwind",
      activeColorClass: "active:bg-[#7dd5fc]",
      hoverColorClass: "hover:bg-[#bae8fd]",
      url: "https://tailwindcss.com/"
    },
    {
      label: "Bootstrap CSS",
      image: "bootstrap",
      activeColorClass: "active:bg-[#c1a9ff]",
      hoverColorClass: "hover:bg-[#dbcfff]",
      url: "https://getbootstrap.com/"
    },
    {
      label: "Vue.js",
      image: "vue",
      activeColorClass: "active:bg-[#b1e9ca]",
      hoverColorClass: "hover:bg-[#d6f5e3]",
      url: "https://vuejs.org/"
    },
    {
      label: "React.js",
      image: "react",
      activeColorClass: "active:bg-[#a4ebfd]",
      hoverColorClass: "hover:bg-[#cef6ff]",
      url: "https://react.dev/"
    },
    {
      label: "Laravel",
      image: "laravel",
      activeColorClass: "active:bg-[#ffc8c5]",
      hoverColorClass: "hover:bg-[#ffe1df]",
      url: "https://laravel.com/"
    },
    {
      label: "Figma",
      image: "figma",
      activeColorClass: "active:bg-[#ffcdc7]",
      hoverColorClass: "hover:bg-[#ffe4e1]",
      url: "https://www.figma.com/"
    },
    {
      label: "Cloudinary",
      image: "cloudinary",
      activeColorClass: "active:bg-[#a0bcf0]",
      hoverColorClass: "hover:bg-[#c6d6f7]",
      url: "https://cloudinary.com/"
    },
    {
      label: "Docker",
      image: "docker",
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
        {TOOLS.map((tool, index) => (
          <button type="button" key={index} className={`bg-white ${tool.hoverColorClass} ${tool.activeColorClass}`} onClick={() => goToUrl(tool.url)}>
            <div>
              <img src={`${imagesPath}${tool.image}.png`} alt={tool.label} />
              <p>{tool.label}</p>
            </div>
            <div>
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export { Tools }
