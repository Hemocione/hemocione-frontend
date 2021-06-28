import styles from './Hemocionews.module.css'
import {
  News
} from '..'

var news = [
  {
    img: '/hemocionews/news1.png',
    title: 'Polícia Militar doando no RJ',
    date: '22 Janeiro / 2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ',
    link: 'https://www.instagram.com/Hemocione/',
    image_at_bottom: false
  },
  {
    img: '/hemocionews/news2.png',
    title: 'Poderia, por obséquio, me conceder um Salve?',
    date: '16 Janeiro / 2021',
    text: 'Manjaro is a professionally made operating system that is a suitable replacement for Windows or MacOS. Multiple Desktop Environments are available through our Official and Community editions.',
    link: 'https://www.instagram.com/Hemocione/',
    image_at_bottom: true
  },
  {
    img: '/hemocionews/new3.png',
    title: 'Tamo junto meu doador é nozes',
    date: '22 Dezembro / 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a',
    link: 'https://www.instagram.com/Hemocione/',
    image_at_bottom: false
  }
]

const Hemocionews = () => {
  return (
    <div className={styles.hemocionewsContainer}>
      <h2 className={styles.title}>
        <a className={styles.red}>
          HEMOCIO
        </a>
        <a className={styles.thin}>
          NEWS
        </a> 
      </h2>
      <div className={styles.contentContainer}>
        {news.map(({img, title, date, text, link, image_at_bottom, ...rest}) => (
          <News img={img} title={title} date={date} text={text} link={link} key={link} image_at_bottom={image_at_bottom} /> 
        ))}
      </div>
    </div>
  )
}

export default Hemocionews