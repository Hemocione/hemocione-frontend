import { MenuItems } from '..'
import styles from './Navbar.module.css'
import Image from 'next/image'

const Navbar = () => (
  <nav className={styles.header}>
    <Image alt='Hemocione' width={300} height={200} className={styles.headerTitle} src='/title.svg' />
    <MenuItems />
    {/* <LoginItems /> */}
  </nav>
)

export default Navbar
