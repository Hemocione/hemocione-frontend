import { MenuItem } from '..'
import styles from './FooterMenu.module.css'

const FooterMenu = () => (
  <ul className={styles.container}>
    <MenuItem link='/' text='Home' />
    <MenuItem link='/who' text='Quem Somos' />
    <MenuItem external link='https://loja.hemocione.com.br/' text='Loja' />
    <MenuItem external link={process.env.NEXT_PUBLIC_COMPETITIONS} text='Competições' />
  </ul>
)

export default FooterMenu
