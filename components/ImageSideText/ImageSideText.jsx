import styles from './ImageSideText.module.css'

const ImageSideText = ({img, textSections, index}) => {
  let even = index % 2 == 0
  let textContainer = even ? styles.rightText : styles.leftText

  return (
    <div className={styles.container}>
      {even ? null : <img src={img} className={styles.image} />}
      <div className={styles.textContainer}>
        {textSections.map((text) => {
          return (
            <p>
              {text}
            </p>
          )
        })}
      </div>
      {even ? <img src={img} className={styles.image} /> : null}
    </div>
  )
}

export default ImageSideText