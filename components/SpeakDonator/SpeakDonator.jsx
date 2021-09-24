import ArrowButton from '../ArrowButton/ArrowButton'
import styles from './SpeakDonator.module.css'

const videosInfo = [
  {
    key: 'video5',
    link: 'https://www.youtube.com/embed/xwKDzw59waE',
  },
  {
    key: 'video4',
    link: 'https://www.youtube.com/embed/AMwI4XPluqU',
  },
  {
    key: 'video3',
    link: 'https://www.youtube.com/embed/iUoHd9oCw-4',
  },
]
const SpeakDonator = () => (
  <div className={styles.speakDonatorContainer}>
    <h2 className={styles.title}>
      Fala
      <span className={styles.red}>{' Doador'}</span>
    </h2>
    <div className={styles.videosContainer}>
      {videosInfo.map(({ link, key }) => (
        <iframe key={key} allowFullScreen className={styles.youtubeVideo} src={link} title={key} />
      ))}
    </div>
    <div className={styles.buttonContainer}>
      <ArrowButton
        link='https://www.youtube.com/watch?v=msgVN0ykkBU&list=PLC3GQZK1BF2IyJxBaU0ZJjNyLYNUsCUVI'
        text='Mais Vídeos'
      />
    </div>
  </div>
)

export default SpeakDonator
