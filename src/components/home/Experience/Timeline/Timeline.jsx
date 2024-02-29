import styles from "@/components/home/Experience/Timeline/Timeline.module.css"
import estratek from "@/assets/images/estratekventures_logo.jpg"
import arrow from "@/assets/images/arow.png"

function Timeline() {
  return (
    <div id={styles.timeline}>
      <div>
        <div>
          <span>Ene. 2018 - Dic. 2020</span>
        </div>
        <div>
          <i className="text-4xl text-high-700 leading-3 bi bi-code-slash" />
        </div>
        <div className="pb-12">
          <p className={`mb-4 ${styles.titleText}`}>Freelance Software Developer</p>
          <p className={styles.bodyText}>
            Durante este periodo inicié mi formación en desarrollo web de forma autodidacta al mismo tiempo que trabajé como tutor universitario, asesor de
            proyectos académicos y ocasionalmente Desarrollador Web Full Stack independiente.
          </p>
        </div>
      </div>
      <div>
        <div>
          <span>Feb. 2021 - Oct. 2023</span>
        </div>
        <div>
          <a href="https://estratek.com.co/" target="_blank">
            <img src={estratek} alt="Estratek" className="w-full aspect-square" />
          </a>
        </div>
        <div className="pb-12">
          <p className={styles.titleText}>
            <a href="https://estratek.com.co/" target="_blank" className="hover:text-high-700 transition duration-300">
              Estratek Ventures
            </a>
          </p>
          <p className={`mb-4 ${styles.subtitleText}`}>Desarrollador Web Full Stack</p>
          <p className={`mb-4 ${styles.bodyText}`}>Dentro de esta empresa participé en el proceso de diseño y desarrollo de dos aplicaciones web:</p>

          <p className={`mb-2 pl-4 ${styles.bodyText}`}>
            <span className="font-medium">1.</span>&nbsp;Aplicación web con videollamadas, registro y autenticación de usuarios para proyecto de
            intraemprendimiento orientado a reducir la brecha digital de los adultos mayores.
          </p>
          <p className={`pl-4 ${styles.noteText}`}>Tecnologías empleadas: Laravel, Vue.js, Bootstrap CSS, MySQL.</p>
          <p className={`mb-4 pl-4 ${styles.noteText}`}>Integraciones: Zoom y Twilio Video.</p>

          <p className={`mb-2 pl-4 ${styles.bodyText}`}>
            <span className="font-medium">2.</span>&nbsp;Aplicación web destinada a automatizar operacionales del área contable de la compañía y a brindar
            optimización y orden a la misma. Integrada con diferentes softwares contables y con diferentes APIs externas.
          </p>
          <p className={`pl-4 ${styles.noteText}`}>Tecnologías empleadas: Vue.js, Tailwind CSS, Laravel y MySQL.</p>
          <p className={`pl-4 mb-2 ${styles.noteText}`}>Integraciones: Google Sheets, Siigo API y Alegra API.</p>
          <a href="https://tuback.com.co/" target="_blank" className="pl-4 text-high-700 font-sans text-sm font-medium hover:underline">
            Miralo aquí
          </a>
        </div>
      </div>
      <div>
        <div>
          <span>Ene. 2024 - Mar. 2024</span>
        </div>
        <div>
          <a href="#" target="_blank">
            <i className="text-4xl text-high-700 leading-3 bi bi-briefcase" />
          </a>
        </div>
        <div className="pb-12">
          <p className={`mb-4 ${styles.titleText}`}>
            <a href="#" target="_blank" className="hover:text-high-700 transition duration-300">
              Sitio Web Personal
            </a>
          </p>
          <p className={`mb-2 ${styles.bodyText}`}>Creado con amor y arte ¿Te gusta?</p>
          <p className={styles.noteText}>Tecnologías empleadas: Figma, Tailwind CSS y React.js.</p>
          <p className={styles.noteText}>Integraciones: Cloudianry API.</p>
        </div>
      </div>
      <div>
        <div />
        <div>
          <i className="text-4xl text-high-700 leading-3 bi bi-question-circle" />
        </div>
        <div className="pb-4">
          <img src={arrow} alt="Arrow" className="w-20 h-auto mb-4" />
          <p className={`mb-4 ${styles.titleText}`}>¿Quieres que tu empresa esté aquí?</p>
          <button type="button" className="btn-md btn-transparent-high">
            Contáctame
          </button>
        </div>
      </div>
    </div>
  )
}

export { Timeline }
