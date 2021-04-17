import styles from './Banner.module.css'
import {
  ArrowButtonWithLink
} from '..'

const Banner = ({img, whiteTitle, redTitle, headliner, text}) => {
  return (
    <div style={{ backgroundImage: `url(${img})`}} className={styles.banner}>
      <div className={styles.bannerInfoContainer}>
        <h2 className={styles.title}>
          {whiteTitle}
          <a className={styles.red}>
            {redTitle}
          </a>
        </h2>
        <h3 className={styles.headliner}>
          {headliner}
        </h3>
        <div className={styles.detailsContainer}>
          <p className={styles.detailsText}>
            {text}
          </p>
          <ArrowButtonWithLink link="#" text="Saiba Mais" className={styles.knowMore} />
        </div>
      </div>
    </div>
  )
}

export default Banner