import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './ButtonWithLink.module.css'

const ButtonWithLink = ({ link, text }) => (
  <Link href={link}>
    <button className={styles.button} type='button'>
      {text}
    </button>
  </Link>
)

ButtonWithLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ButtonWithLink
