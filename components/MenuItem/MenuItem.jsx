import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './MenuItem.module.css'

const MenuItem = ({ external, link, text }) => {
  if (external) {
    return (
      <li className={styles.menuItem}>
        <a href={link}>
          <span className={styles.menuText}>{text}</span>
        </a>
      </li>
    )
  }

  return (
    <li className={styles.menuItem}>
      <Link href={link}>
        <span className={styles.menuText}>{text}</span>
      </Link>
    </li>
  )
}

MenuItem.propTypes = {
  external: PropTypes.bool,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default MenuItem
