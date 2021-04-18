import styles from './Supporters.module.css'
import {
  ImageWithLink
} from '..'

var supporters = [
  {
    src: "/supporters/papito.svg",
    description: "Vercel Logo"
  },
  {
    src: "/supporters/papito2.svg",
    description: "Vercel Logo"
  },
  {
    src: "/supporters/papito3.svg",
    description: "Vercel Logo"
  },
  {
    src: "/supporters/parangole.svg",
    description: "Vercel Logo"
  },
  {
    src: "/supporters/parangs.svg",
    description: "Vercel Logo"
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
        {supporters.map(({src, description, ...rest}) => (
          <img src={src} alt={description} className={styles.supporter} />
        ))}
      </div>
    </div>
  )
}

export default Supporters