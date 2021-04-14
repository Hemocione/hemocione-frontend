import { MenuItems } from '..'
import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.header}>
      <img src='/title.svg' alt='Hemocione' className={styles.headerTitle} />
      <MenuItems/>
    </nav>
  );
}

export default Navbar
