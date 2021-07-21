import PropTypes from 'prop-types'
// import styles from './ImageWithLink.module.css'

const ImageWithLink = ({ link, imagePath, description }) => (
  <a href={link} rel='noopener noreferrer' target='_blank'>
    <img alt={description} src={imagePath} />
  </a>
)

ImageWithLink.propTypes = {
  description: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ImageWithLink
