import PropTypes from 'prop-types'
import styles from './ImageSideText.module.css'

const ImageSideText = ({ alt, img, index, textSections }) => {
  const even = index % 2 === 0
  // const textContainer = even ? styles.rightText : styles.leftText

  return (
    <div className={styles.container}>
      {even ? null : <img alt={alt} className={styles.image} src={img} />}
      <div className={styles.textContainer}>
        {textSections.map(text => (
          <p>{text}</p>
        ))}
      </div>
      {even ? <img alt={alt} className={styles.image} src={img} /> : null}
    </div>
  )
}

ImageSideText.propTypes = {
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  textSections: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default ImageSideText
