import PropTypes from 'prop-types'
import styles from './Banner.module.css'

const Banner = ({ endTitle, headliner, img, redTitle, startTitle }) => (
  <div className={styles.banner} style={{ backgroundImage: `url(${img})` }}>
    <div className={styles.bannerInfoContainer}>
      <h2 className={styles.title}>
        {startTitle}
        <span className={styles.red}>{redTitle}</span>
        {endTitle}
      </h2>
      <h3 className={styles.headliner}>{headliner}</h3>
    </div>
  </div>
)

Banner.propTypes = {
  endTitle: PropTypes.string.isRequired,
  headliner: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  redTitle: PropTypes.string.isRequired,
  startTitle: PropTypes.string.isRequired,
}

export default Banner
