import { 
  MenuItems,
  LoginItems } from '..'
import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.header}>
      <img src='/title.svg' alt='Hemocione' className={styles.headerTitle} />
      <MenuItems />
      <LoginItems />
    </nav>
  );
}

export default Navbar
