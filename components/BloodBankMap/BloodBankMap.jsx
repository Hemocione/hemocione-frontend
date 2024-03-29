import Link from 'next/link'
import styles from './BloodBankMap.module.css'

const BloodBankMap = () => (
  <div className={styles.container}>
    <h2 className={styles.title} id='ondedoar'>
      <a href='#ondedoar' title='Permalink para mapa de doação de sangue'>
        Doe<span className={styles.red}>{' aqui'}</span>
      </a>
    </h2>
    <div className={styles.iframeContainer}>
      <iframe
        className={styles.map}
        height='640'
        loading='lazy'
        src='https://www.google.com/maps/d/u/0/embed?mid=1s8gU7TwBgBVbE9fO3S7yUfrKP8Yhodiy'
        title='Mapa de locais para doação de sangue no Brasil'
        width='80%'
      />
      <div className={styles.poweredBy}>
        Powered by
        <span className={styles.red}>
          <Link href='https://salvovidas.com'> Salvo Vidas </Link>
        </span>
      </div>
    </div>
  </div>
)

export default BloodBankMap
