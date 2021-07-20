import { ImageWithLink } from '..'
import styles from './FooterSocialMedia.module.css'

const FooterSocialMedia = () => (
  <div className={styles.socialMediaContainer}>
    <ImageWithLink
      description='Instagram Link'
      imagePath='/instagramWhite.svg'
      link='https://www.instagram.com/Hemocione/'
    />
    <ImageWithLink
      description='Youtube Link'
      imagePath='/youtubeWhite.svg'
      link='https://www.youtube.com/channel/UCLNW7FBaIF_SSguCS46_ieg'
    />
    <ImageWithLink
      description='Facebook Link'
      imagePath='/facebookWhite.svg'
      link='https://www.facebook.com/hemocione/'
    />
    <ImageWithLink
      description='Linkedin Link'
      imagePath='/linkedinWhite.svg'
      link='https://www.linkedin.com/company/hemocione'
    />
  </div>
)

export default FooterSocialMedia
