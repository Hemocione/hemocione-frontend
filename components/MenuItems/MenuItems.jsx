import Link from 'next/link'
import styles from './MenuItems.module.css'

const MenuItems = () => {
  return (
    <ul>
      <li>
        <Link href='/' >
          <a className={styles.menuText}>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/who' >
          <a className={styles.menuText}>Quem Somos</a>
        </Link>
      </li>
      <li>
        <Link href='/where' >
          <a className={styles.menuText}>Onde e Quando</a>
        </Link>
      </li>
      <li>
        <Link href='/faq' >
          <a className={styles.menuText}>Dúvidas Frequentes</a>
        </Link>
      </li>
    </ul>
  );
}

export default MenuItems
