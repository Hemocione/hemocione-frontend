import PropTypes from 'prop-types'
import styles from './ArrowButton.module.css'

const ArrowButton = ({ link, text }) => (
  <a href={link} rel='noopener noreferrer' target='_blank'>
    <button className={styles.button} type='button'>
      {text}
      <img alt='' className={styles.arrow} src='/arrow.svg' />
    </button>
  </a>
)

ArrowButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ArrowButton
