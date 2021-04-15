import {
  ButtonWithLink,
  MenuItem } from '..'
import styles from './LoginItems.module.css'

const LoginItems = () => {
  return (
    <ul className={styles.loginItemsContainer}>
      <ButtonWithLink link="/sign_up" text="Registrar" />
      <MenuItem link="/login" text="Entrar" />
    </ul>
  )
}

export default LoginItems