import styles from './SpeakDonator.module.css'
import {
  MoreVideosButton
} from '..'
import ArrowButton from '../ArrowButton/ArrowButton'

const videosInfo = [
  {
    link: 'https://www.youtube.com/embed/xwKDzw59waE',
    key: 'video5'
  },
  {
    link: 'https://www.youtube.com/embed/AMwI4XPluqU',
    key: 'video4'
  },
  {
    link: 'https://www.youtube.com/embed/iUoHd9oCw-4',
    key: 'video3'
  }
]
const SpeakDonator = () => {
  return (
    <div className={styles.speakDonatorContainer}>
      <h2 className={styles.title}>
        Fala
        <a className={styles.red}>
          {" Doador"}
        </a>
      </h2>
      <div className={styles.videosContainer}>
        {videosInfo.map(({ link, key, ...rest }) => (
          <iframe className={styles.youtubeVideo} src={link} key={key} allowFullScreen/>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <ArrowButton link={"https://www.youtube.com/watch?v=msgVN0ykkBU&list=PLC3GQZK1BF2IyJxBaU0ZJjNyLYNUsCUVI"}
                     text={"Mais Vídeos"}/>
      </div>
    </div>
  )
}

export default SpeakDonator