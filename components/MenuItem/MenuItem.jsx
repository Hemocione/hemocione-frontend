import Link from 'next/link'
import styles from './MenuItem.module.css'

const MenuItem = ({link, text}) => {
  return (
    <li className={styles.MenuItem}>
      <Link href={link}>
        <a className={styles.menuText}>{text}</a>
      </Link>
    </li>
  );
}

export default MenuItem
