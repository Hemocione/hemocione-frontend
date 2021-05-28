import { MenuItem } from '..'
import styles from './MenuItems.module.css'

const MenuItems = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem link='/' text='Home' />
      <MenuItem link='/who' text='Quem Somos' />
      <MenuItem link='/where' text='Onde e Quando' />
      <MenuItem link='/faq' text='Dúvidas Frequentes' />
    </ul>
  );
}

export default MenuItems
