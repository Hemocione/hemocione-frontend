import { Banner, HelpedSave, SpeakDonator, Supporters, WhereAndWhen } from '../components'

const Home = () => (
  <div>
    <Banner
      endTitle='CIONAR JUNTOS!'
      headliner='Vamos encher essa bolsa juntos!'
      img='/bannerVitor.png'
      redTitle='HEMO'
      startTitle='VAMOS '
    />
    <HelpedSave />
    <WhereAndWhen />
    <SpeakDonator />
    {/* <Hemocionews /> */}
    <Supporters />
  </div>
)

export default Home
