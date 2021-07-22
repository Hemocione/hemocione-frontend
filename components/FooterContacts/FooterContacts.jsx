import { FooterSocialMedia } from '..'
import styles from './FooterContacts.module.css'

const FooterContacts = () => (
  <div className={styles.contactsContainer}>
    <h3 className={styles.text}>Fala com a gente!</h3>
    <h3 className={styles.text}>Telefone: +55 21 99159 6646</h3>
    <h3 className={styles.text}>Email: contato@hemocione.com.br</h3>
    <FooterSocialMedia />
  </div>
)

export default FooterContacts
