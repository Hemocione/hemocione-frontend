import styles from './FooterSocialMedia.module.css'
import { ImageWithLink } from '..'

const FooterSocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <ImageWithLink link="https://www.instagram.com/Hemocione/" imagePath="/instagramWhite.svg" description="Instagram Link"/>
      <ImageWithLink link="https://www.youtube.com/channel/UCLNW7FBaIF_SSguCS46_ieg" imagePath="/youtubeWhite.svg" description="Youtube Link"/>
      <ImageWithLink link="https://www.facebook.com/hemocione/" imagePath="/facebookWhite.svg" description="Facebook Link"/>
      <ImageWithLink link="https://www.linkedin.com/company/hemocione" imagePath="/linkedinWhite.svg" description="Linkedin Link"/>
    </div>
  )
}

export default FooterSocialMedia