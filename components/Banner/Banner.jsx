import styles from './Banner.module.css'
import {
  KnowMoreButton
} from '..'

const Banner = ({img, startTitle, redTitle, endTitle, headliner}) => {
  return (
    <div style={{ backgroundImage: `url(${img})`}} className={styles.banner}>
      <div className={styles.bannerInfoContainer}>
        <h2 className={styles.title}>
          {startTitle}
          <span className={styles.red}>
            {redTitle}
          </span>
          {endTitle}
        </h2>
        <h3 className={styles.headliner}>
          {headliner}
        </h3>
      </div>
    </div>
  )
}

export default Banner