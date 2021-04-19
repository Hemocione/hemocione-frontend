import styles from './Supporters.module.css'
import {
  ImageWithLink
} from '..'

var supporters = [
  {
    src: "/supporters/papito.svg",
    description: "Vercel Logo",
    key: "papito"
  },
  {
    src: "/supporters/papito2.svg",
    description: "papit 2 Logo",
    key: "papito2"
  },
  {
    src: "/supporters/papito3.svg",
    description: "op Logo",
    key: "papito3"
  },
  {
    src: "/supporters/parangole.svg",
    description: "pip Logo",
    key: "parangole"
  },
  {
    src: "/supporters/parangs.svg",
    description: "pap Logo",
    key: "parangs"
  },
]

const Supporters = () => {
  return (
    <div className={styles.supportersContainer}>
      <div className={styles.headContainer}>
        <h2 className={styles.supportersTitle}>
          Apoiadores
        </h2>
        <div className={styles.githubHelp}>
          <h3 className={styles.helpText}>
            Quer ajudar?
          </h3>
          <ImageWithLink link="https://github.com/Hemocione" imagePath="/github.svg" />
        </div>
      </div>
      <div className={styles.supportersImagesContainer}>
        {supporters.map(({src, description, key, ...rest}) => (
          <img src={src} alt={description} key={key} className={styles.supporter} />
        ))}
      </div>
    </div>
  )
}

export default Supporters