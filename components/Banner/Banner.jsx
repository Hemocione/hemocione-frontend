import styles from './Banner.module.css'

const Banner = ({img, title, headliner, text}) => {
  return (
    <div style={{ backgroundImage: `url(${img})`}} className={styles.banner}>
      <div className={styles.bannerInfoContainer}>
        <h2>
          {title}
        </h2>
        <h3>
          {headliner}
        </h3>
        <div>
          <p>
            {text}
          </p>
          {/* Add ArrowButton */}
        </div>
      </div>
    </div>
  )
}

export default Banner