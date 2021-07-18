import React from "react";
import { HamburgerMenu, MenuItems } from "..";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav className={styles.header}>
    <img src="/title.svg" alt="Hemocione" className={styles.headerTitle} />
    <MenuItems />
    <HamburgerMenu />
  </nav>
);

export default Navbar;
