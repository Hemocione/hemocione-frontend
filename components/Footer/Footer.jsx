import { FooterContacts, FooterMenu } from '..'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => (
  <footer>
    <div className={styles.hills} />
    <div className={styles.footerContentContainer}>
      <div className={styles.footerLeftContainer}>
        <Image alt='Hemocione White Logo' className={styles.hemoLogo} height={200} width={200} src='/whiteLogo.svg' />
        <FooterMenu />
      </div>
      <FooterContacts />
    </div>
    <div className={styles.footerRectangle}>
      <p>© 2021 Hemocione</p>
      <div className={styles.vercelContainer}>
        <p className={styles.poweredBy}>Powered by</p>
        <Image alt='Vercel Logo' height={50} width={50} className={styles.vercelLogo} src='/vercel.svg' />
      </div>
      <p>Created by Hemocione</p>
    </div>
  </footer>
)

export default Footer
