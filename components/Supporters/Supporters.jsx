import styles from './Supporters.module.css'
import {
  ImageWithLink
} from '..'

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
    </div>
  )
}

export default Supporters