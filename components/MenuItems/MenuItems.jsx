import { MenuItem } from '..'
import styles from './MenuItems.module.css'

const MenuItems = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem link='/' text='Home' />
      <MenuItem link='/who' text='Quem Somos' />
      <MenuItem link='https://loja.hemocione.com.br/' text='Loja' external />
    </ul>
  );
}

export default MenuItems
