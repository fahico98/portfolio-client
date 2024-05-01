import styles from "@/components/home/Hero/Hero.module.css"
import heroImage from "@/assets/images/photo_400_400.jpg"

function Hero() {
  const socials = [
    { iconClass: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/fahico98/" },
    { iconClass: "twitter-x", title: "X", url: "https://twitter.com/fahico98" },
    { iconClass: "github", title: "GitHub", url: "https://github.com/fahico98" }
  ]

  return (
    <div id={styles.hero} className="bg-high-gradient">
      <div className="padding-x max-width">
        <div>
          <p className={styles.text}>Hola, mi nombre es</p>
          <p className={styles.title}>Fahibram Cárcamo.</p>
          <p className={`${styles.text} mb-2`}>Soy un Desarrollador Web Full Stack de Bogotá D.C.</p>
          <button className="btn-lg btn-transparent-white mb-2">
            Contáctame&nbsp;<i className="bi bi-chat-left-dots"></i>
          </button>
          <div>
            {socials.map((social, index) => (
              <button type="button" className="btn-icon-md btn-icon-white" title={social.title} key={index} onClick={() => window.open(social.url, "_blank")}>
                <i className={`bi bi-${social.iconClass}`}></i>
              </button>
            ))}
          </div>
        </div>
        <div>
          <div>
            <img src={heroImage} alt="Fahibram Cárcamo" />
            <div id={styles.frame1} />
            <div id={styles.frame2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
