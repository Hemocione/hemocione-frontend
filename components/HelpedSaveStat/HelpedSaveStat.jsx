import PropTypes from 'prop-types'
import styles from './HelpedSaveStat.module.css'

const HelpedSaveStat = ({ alt, img, number, text }) => (
  <li className={styles.statContainer}>
    <img alt={alt} src={img} />
    <h2 className={styles.number}>{number}</h2>
    <h3 className={styles.text}>{text}</h3>
  </li>
)

HelpedSaveStat.propTypes = {
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default HelpedSaveStat
