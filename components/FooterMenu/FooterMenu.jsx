import { MenuItem } from '..'
import styles from './FooterMenu.module.css'

const FooterMenu = () => (
  <ul className={styles.container}>
    <MenuItem link='/' text='Home' />
    <MenuItem link='/who' text='Quem Somos' />
    <MenuItem external link='https://loja.hemocione.com.br/' text='Loja' />
  </ul>
)

export default FooterMenu
