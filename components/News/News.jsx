import PropTypes from 'prop-types'
import { ArrowButton } from '..'
import styles from './News.module.css'

const News = ({ date, imageAtBottom, img, link, text, title }) => (
  <div key={link} className={styles.newsContainer}>
    {imageAtBottom ? null : <img alt={title} className={styles.image} src={img} />}
    <div className={styles.newsContentContainer}>
      <h3 className={styles.title}>{title}</h3>
      <hr className={styles.divider} />
      <p className={styles.date}>{date}</p>
      <p className={styles.text}>{text}</p>
      <ArrowButton link={link} text='Veja Mais!' />
    </div>
    {imageAtBottom ? <img alt={title} className={styles.image} src={img} /> : null}
  </div>
)

News.propTypes = {
  date: PropTypes.string.isRequired,
  imageAtBottom: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default News
