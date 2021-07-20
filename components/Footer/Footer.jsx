import { FooterContacts, FooterMenu } from '..'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className={styles.hills} />
    <div className={styles.footerContentContainer}>
      <div className={styles.footerLeftContainer}>
        <img alt='Hemocione White Logo' className={styles.hemoLogo} src='/whiteLogo.svg' />
        <FooterMenu />
      </div>
      <FooterContacts />
    </div>
    <div className={styles.footerRectangle}>
      <p>© 2021 Hemocione</p>
      <div className={styles.vercelContainer}>
        <p className={styles.poweredBy}>Powered by</p>
        <img alt='Vercel Logo' className={styles.vercelLogo} src='/vercel.svg' />
      </div>
      <p>Created by Hemocione</p>
    </div>
  </footer>
)

export default Footer
