import Image from 'next/image'
import { MenuItems } from '..'
import styles from './Navbar.module.css'

const Navbar = () => (
  <nav className={styles.header}>
    <Image
      alt='Hemocione'
      className={styles.headerTitle}
      height={200}
      src='/title.svg'
      width={300}
    />
    <MenuItems />
    {/* <LoginItems /> */}
  </nav>
)

export default Navbar
