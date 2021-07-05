import Link from 'next/link'
import styles from './MenuItem.module.css'

const MenuItem = ({link, text, external}) => {
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
  );
}

export default MenuItem
