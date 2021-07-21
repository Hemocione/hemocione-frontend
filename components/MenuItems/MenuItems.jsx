import { MenuItem } from '..'
import styles from './MenuItems.module.css'

const MenuItems = () => (
  <ul className={styles.menu}>
    <MenuItem link='/' text='Home' />
    <MenuItem link='/who' text='Quem Somos' />
    <MenuItem external link='https://loja.hemocione.com.br/' text='Loja' />
  </ul>
)

export default MenuItems
