import styles from './Footer.module.css'
import { 
  FooterMenu,
  FooterContacts } from '..'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.hills} />
      <div className={styles.footerContentContainer}>
        <div className={styles.footerLeftContainer}>
          <img src="/whiteLogo.svg" alt="Hemocione White Logo" className={styles.hemoLogo} />
          <FooterMenu />
        </div>
        <FooterContacts />
      </div>
      <div className={styles.footerRectangle}>
        <p>© 2021 Hemocione</p>
        <div className={styles.vercelContainer}>
          <p className={styles.poweredBy}>Powered by</p>
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.vercelLogo}/>
        </div>
        <p>Created by Hemocione</p>
      </div>
    </footer>
  );
}

export default Footer
