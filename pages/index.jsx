import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  HelpedSave,
  Banner,
  Supporters,
  WhereAndWhen,
  SpeakDonator
} from '../components'

const Home = () => {
  return (
    <div>
      <Banner img="/bannerVitor.png" whiteTitle='FALA ' redTitle='DOADOR!' headliner="Vamos encher essa bolsa juntos!"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
" />
      <HelpedSave />
      <WhereAndWhen />
      <SpeakDonator />
      <Supporters />
    </div>
  )
}

export default Home
