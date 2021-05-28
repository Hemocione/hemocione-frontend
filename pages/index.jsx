import {
  HelpedSave,
  Supporters,
  WhereAndWhen,
  SpeakDonator,
  Hemocionews,
  Banner
} from '../components'

const Home = () => {
  return (
    <div>
      <Banner img="/bannerVitor.png" startTitle='VAMOS ' redTitle='HEMO' endTitle="CIONAR JUNTOS!" headliner="Vamos encher essa bolsa juntos!"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
" />
      <HelpedSave />
      <WhereAndWhen />
      <SpeakDonator />
      <Hemocionews />
      <Supporters />
    </div>
  )
}

export default Home
