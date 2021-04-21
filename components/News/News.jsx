import styles from './News.module.css'
import {
  ArrowButton
} from '..'

const News = ({img, title, date, text, link, image_at_bottom}) => {
  return (
    <div className={styles.newsContainer}>
      {image_at_bottom ? null : <img src={img} alt={title} className={styles.image} />}
      <div className={styles.newsContentContainer}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <hr className={styles.divider} />
        <p className={styles.date}>
          {date}
        </p>
        <p className={styles.text}>
          {text}
        </p>
        <ArrowButton link={link} text="Veja Mais!" />
      </div>
      {image_at_bottom ? <img src={img} alt={title} className={styles.image} /> : null}
    </div>
  )
}

export default News
