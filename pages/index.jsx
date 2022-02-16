import { Banner, HelpedSave, SpeakDonator, Supporters, WhereAndWhen, BloodBankMap } from '../components'

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
    {/* <WhereAndWhen /> */}
    <BloodBankMap />
    <SpeakDonator />
    <Supporters />
  </div>
)

export default Home
