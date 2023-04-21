import { ImageWithLink } from '..'
import styles from './Supporters.module.css'

const supporters = [
  {
    description: 'Colégio Cruzeiro',
    key: 'colegio_cruzeiro',
    src: '/supporters/colegiocruzeiro.png',
  },
  {
    description: 'Mattos Filho',
    key: 'mattos_filho',
    src: '/supporters/mattosfilho.png',
  },
  {
    description: 'Castro e Soares Contadores',
    key: 'castro_soares_contadores',
    src: '/supporters/contadores.png',
  },
  {
    description: 'Maria Açaí - Urca',
    key: 'maria_acai_urca',
    src: '/supporters/mariaacai.png',
  },
]

const Supporters = () => (
  <div className={styles.supportersContainer}>
    <div className={styles.headContainer}>
      <h2 className={styles.supportersTitle}>Apoiadores</h2>
      <div className={styles.githubHelp}>
        <h3 className={styles.helpText}>Quer ajudar?</h3>
        <ImageWithLink
          description='Github'
          imagePath='/github.svg'
          link='https://github.com/Hemocione'
        />
      </div>
    </div>
    <div className={styles.supportersImagesContainer}>
      {supporters.map(({ src, description, key }) => (
        <img key={key} alt={description} className={styles.supporter} src={src} />
      ))}
    </div>
  </div>
)

export default Supporters
