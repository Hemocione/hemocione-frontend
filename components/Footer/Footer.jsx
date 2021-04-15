import styles from './Footer.module.css'
import { 
  FooterMenu,
  FooterContacts } from '..'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.hills} />
      <div className={styles.footerContentContainer}>
        <img src="/whiteLogo.svg" alt="Hemocione White Logo" className={styles.hemoLogo} />
        <FooterMenu />
        <FooterContacts />
      </div>
      <div className={styles.footerRectangle}>
        <p>© 2021 Hemocione</p>
        <div className={styles.vercelContainer}>
          <p className={styles.poweredBy}>Powered by</p>
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.vercelLogo}/>
        </div>
        <p>Web Design and Development by Hemocione</p>
      </div>
    </footer>
  );
}

export default Footer
