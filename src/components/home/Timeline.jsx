import styles from "@/components/home/Timeline.module.css"
import estratekLogo from "@/assets/images/estratekventures_logo.jpg"
import woobsingLogo from "@/assets/images/woobsing_logo.jpg"
// import arrow from "@/assets/images/arow.png"

function Timeline() {
  return (
    <div id={styles.timeline}>
      <div>
        <div>
          <span className={`${styles.timeRange} ${styles.outerTimeRange}`}>Ene. 2018 - Dic. 2020</span>
        </div>
        <div>
          <i className="text-xl sm:text-4xl text-high-700 leading-3 bi bi-code-slash" />
        </div>
        <div className="pb-12">
          <span className={`${styles.timeRange} ${styles.innerTimeRange}`}>Ene. 2018 - Dic. 2020</span>
          <p className={`mb-4 ${styles.titleText}`}>Freelance Software Developer</p>
          <p className="home-section-text">
            Durante este periodo inicié mi formación en desarrollo web de forma autodidacta al mismo tiempo que trabajé como tutor universitario, asesor de
            proyectos académicos y ocasionalmente Desarrollador Web Full Stack independiente.
          </p>
        </div>
      </div>
      <div>
        <div>
          <span className={`${styles.timeRange} ${styles.outerTimeRange}`}>Feb. 2021 - Oct. 2023</span>
        </div>
        <div>
          <a href="https://estratek.com.co/" target="_blank">
            <img src={estratekLogo} alt="Estratek" className="w-full object-contain" />
          </a>
        </div>
        <div className="pb-12">
          <span className={`${styles.timeRange} ${styles.innerTimeRange}`}>Feb. 2021 - Oct. 2023</span>
          <p className={styles.titleText}>
            <a href="https://estratek.com.co/" target="_blank" className="link-headline">
              Estratek Ventures
            </a>
          </p>
          <p className={`mb-4 ${styles.subtitleText}`}>Desarrollador Web Full Stack</p>
          <p className="mb-4 home-section-text">Dentro de esta empresa participé en el proceso de diseño y desarrollo de dos aplicaciones web:</p>

          <p className="mb-4 ml-4 home-section-text">
            <span className="font-medium">1.</span>&nbsp;Aplicación web con videollamadas, registro y autenticación de usuarios para proyecto de
            intraemprendimiento orientado a reducir la brecha digital de los adultos mayores.
          </p>
          {/*<p className={`pl-4 ${styles.noteText}`}>Tecnologías empleadas: Laravel, Vue.js, Bootstrap CSS, MySQL.</p>*/}
          {/*<p className={`mb-4 pl-4 ${styles.noteText}`}>Integraciones: Zoom y Twilio Video.</p>*/}

          <p className="ml-4 home-section-text">
            <span className="font-medium">2.</span>&nbsp;Aplicación web destinada a automatizar operacionales del área contable de la compañía y a brindar
            optimización y orden a la misma. Integrada con diferentes softwares contables y con diferentes APIs externas.
          </p>
          {/*<p className={`pl-4 ${styles.noteText}`}>Tecnologías empleadas: Vue.js, Tailwind CSS, Laravel y MySQL.</p>*/}
          {/*<p className={`pl-4 mb-2 ${styles.noteText}`}>Integraciones: Google Sheets, Siigo API y Alegra API.</p>*/}
        </div>
      </div>
      <div>
        <div>
          <span className={`${styles.timeRange} ${styles.outerTimeRange}`}>Ene. 2024 - Mar. 2024</span>
        </div>
        <div>
          <a href="#">
            <i className="text-xl sm:text-4xl text-high-700 leading-3 bi bi-briefcase" />
          </a>
        </div>
        <div className="pb-12">
          <span className={`${styles.timeRange} ${styles.innerTimeRange}`}>Ene. 2024 - Mar. 2024</span>
          <p className={`mb-4 ${styles.titleText}`}>
            <a href="#" className="link-headline">
              Sitio Web Personal
            </a>
          </p>
          <p className="home-section-text">Creado con amor y arte ¿Te gusta?.</p>
        </div>
      </div>
      <div>
        <div>
          <span className={`${styles.timeRange} ${styles.outerTimeRange}`}>Mar. 2024 - Actualidad</span>
        </div>
        <div>
          <a href="https://woobsing.com/" target="_blank">
            <img src={woobsingLogo} alt="Woobsing" className="w-full object-contain" />
          </a>
        </div>
        <div className="pb-4">
          <span className={`${styles.timeRange} ${styles.innerTimeRange}`}>Mar. 2024 - Actualidad</span>
          <p className={styles.titleText}>
            <a href="https://woobsing.com/" target="_blank" className="link-headline">
              Woobsing Digital Marketing
            </a>
          </p>
          <p className={`mb-4 ${styles.subtitleText}`}>Desarrollador Laravel</p>

          <p className="home-section-text">
            Actualmente me dedico al desarrollo, mantenimiento y actualización de diferentes aplicaciones web dentro de la empresa, enfocadas al marketing
            digital y a la inteligencia de negocios.
          </p>
        </div>
      </div>
      {/*<div>*/}
      {/*  <div />*/}
      {/*  <div>*/}
      {/*    <i className="text-4xl text-high-700 leading-3 bi bi-question-circle" />*/}
      {/*  </div>*/}
      {/*  <div className="pb-4">*/}
      {/*    <img src={arrow} alt="Arrow" className="w-20 h-auto mb-4" />*/}
      {/*    <p className={`mb-4 ${styles.titleText}`}>¿Quieres que tu empresa esté aquí?</p>*/}
      {/*    <button type="button" className="btn-md btn-transparent-high">*/}
      {/*      Contáctame&nbsp;<i className="bi bi-chat-left-dots"></i>*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export { Timeline }
