import PropTypes from 'prop-types'
import styles from './Banner.module.css'

const Banner = ({ endTitle, img, redTitle, startTitle }) => (
  <div className={styles.banner} style={{ backgroundImage: `url(${img})` }}>
    <div className={styles.bannerInfoContainer}>
      <h2 className={styles.title}>
        <span className={styles.black}>{startTitle}</span>
        <span className={styles.red}>{redTitle}</span>
        <span className={styles.black}>{endTitle}</span>
      </h2>
    </div>
  </div>
)

Banner.propTypes = {
  endTitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  redTitle: PropTypes.string.isRequired,
  startTitle: PropTypes.string.isRequired,
}

export default Banner
