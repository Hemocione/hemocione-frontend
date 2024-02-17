import { MenuItem } from '..'
import styles from './MenuItems.module.css'

const MenuItems = () => (
  <ul className={styles.menu}>
    <MenuItem link='/' text='Home' />
    <MenuItem link='/who' text='Quem Somos' />
    {/* <MenuItem external link='https://loja.hemocione.com.br/' text='Loja' /> */}
    <MenuItem external link='https://eventos.hemocione.com.br' text='Eventos' />
    {/* <MenuItem external link={process.env.NEXT_PUBLIC_COMPETITIONS} text='Competições' /> */}
  </ul>
)

export default MenuItems
