import styles from './FooterMenu.module.css'
import { MenuItem } from '..'

const FooterMenu = () => {
  return (
    <ul className={styles.container}>
      <MenuItem link='/' text='Home' />
      <MenuItem link='/who' text='Quem Somos' />
      <MenuItem link='https://loja.hemocione.com.br/' text='Loja' external />
      {/* <MenuItem link='/where' text='Onde e Quando' />
      <MenuItem link='/faq' text='Dúvidas Frequentes' />
      <MenuItem link='/sign_up' text='Cadastre-se' />
      <MenuItem link='/site_map' text='Site Map' />
      <MenuItem link='/privacy_policy' text='Política de Privacidade' /> */}
    </ul>
  )
}

export default FooterMenu