import PropTypes from 'prop-types'
import ArrowButton from '../ArrowButton/ArrowButton'
import styles from './SpeakDonator.module.css'

const SpeakDonator = ({ videos }) => (
  <div className={styles.speakDonatorContainer}>
    <h2 className={styles.title}>
      Fala
      <span className={styles.red}>{' Doador'}</span>
    </h2>
    <div className={styles.videosContainer}>
      {videos.map(url => (
        <iframe
          key={url}
          allowFullScreen
          className={styles.youtubeVideo}
          src={url}
          title={`Youtube video from url ${url}`}
        />
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

SpeakDonator.propTypes = {
  videos: PropTypes.isRequired,
}

export default SpeakDonator
