import { MenuItem } from '..'
import styles from './MenuItems.module.css'

const MenuItems = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem link='/' text='Home' />
      <MenuItem link='/who' text='Quem Somos' />
    </ul>
  );
}

export default MenuItems
