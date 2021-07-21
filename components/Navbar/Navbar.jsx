import React from 'react'
import { MenuItems } from '..'
import styles from './Navbar.module.css'

const Navbar = () => (
  <nav className={styles.header}>
    <img alt='Hemocione' className={styles.headerTitle} src='/title.svg' />
    <MenuItems />
    {/* <LoginItems /> */}
  </nav>
)

export default Navbar
