import { ImageWithLink } from '..'
import styles from './Supporters.module.css'

const supporters = [
  {
    description: 'Vercel Logo',
    key: 'papito',
    src: '/supporters/papito.svg',
  },
  {
    description: 'papit 2 Logo',
    key: 'papito2',
    src: '/supporters/papito2.svg',
  },
  {
    description: 'op Logo',
    key: 'papito3',
    src: '/supporters/papito3.svg',
  },
  {
    description: 'pip Logo',
    key: 'parangole',
    src: '/supporters/parangole.svg',
  },
  {
    description: 'pap Logo',
    key: 'parangs',
    src: '/supporters/parangs.svg',
  },
]

const Supporters = () => (
  <div className={styles.supportersContainer}>
    <div className={styles.headContainer}>
      <h2 className={styles.supportersTitle}>Apoiadores</h2>
      <div className={styles.githubHelp}>
        <h3 className={styles.helpText}>Quer ajudar?</h3>
        <ImageWithLink imagePath='/github.svg' link='https://github.com/Hemocione' />
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
