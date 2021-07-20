import { News } from '..'
import styles from './Hemocionews.module.css'

const news = [
  {
    date: '22 Janeiro / 2021',
    imageAtBottom: false,
    img: '/hemocionews/news1.png',
    link: 'https://www.instagram.com/Hemocione/',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ',
    title: 'Polícia Militar doando no RJ',
  },
  {
    date: '16 Janeiro / 2021',
    imageAtBottom: true,
    img: '/hemocionews/news2.png',
    link: 'https://www.instagram.com/Hemocione/',
    text: 'Manjaro is a professionally made operating system that is a suitable replacement for Windows or MacOS. Multiple Desktop Environments are available through our Official and Community editions.',
    title: 'Poderia, por obséquio, me conceder um Salve?',
  },
  {
    date: '22 Dezembro / 2020',
    imageAtBottom: false,
    img: '/hemocionews/new3.png',
    link: 'https://www.instagram.com/Hemocione/',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a',
    title: 'Tamo junto meu doador é nozes',
  },
]

const Hemocionews = () => (
  <div className={styles.hemocionewsContainer}>
    <h2 className={styles.title}>
      {/* <a className={styles.red}>HEMOCIO</a>
      <a className={styles.thin}>NEWS</a> */}
    </h2>
    <div className={styles.contentContainer}>
      {news.map(({ img, title, date, text, link, imageAtBottom }) => (
        <News
          key={link}
          date={date}
          imageAtBottom={imageAtBottom}
          img={img}
          link={link}
          text={text}
          title={title}
        />
      ))}
    </div>
  </div>
)

export default Hemocionews
