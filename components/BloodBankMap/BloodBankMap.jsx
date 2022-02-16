import styles from './BloodBankMap.module.css'

const BloodBankMap = () => {

  return (
    <div className={styles.container}>
      <h2 id="ondedoar" className={styles.title}>
        <a href="#ondedoar" title="Permalink para mapa de doação de sangue">
          Doe<span className={styles.red}>{' aqui'}</span>
        </a>
      </h2>
      <div className={styles.iframeContainer}>
        <iframe className={styles.map} loading="lazy" src="https://www.google.com/maps/d/u/0/embed?mid=1s8gU7TwBgBVbE9fO3S7yUfrKP8Yhodiy" width="80%" height="640"/>
      </div>
    </div>
  )
}

export default BloodBankMap
