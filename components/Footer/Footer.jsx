import Image from 'next/image'
import { FooterContacts, FooterMenu } from '..'
import styles from './Footer.module.css'

const Footer = () => (
  <footer>
    <div className={styles.hills} />
    <div className={styles.footerContentContainer}>
      <div className={styles.footerLeftContainer}>
        <Image
          alt='Hemocione White Logo'
          className={styles.hemoLogo}
          height={200}
          src='/whiteLogo.svg'
          width={200}
        />
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
