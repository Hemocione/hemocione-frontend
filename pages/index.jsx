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
      <Banner img="/bannerVitor.png" startTitle='VAMOS ' redTitle='HEMO' endTitle="CIONAR JUNTOS!" headliner="Vamos encher essa bolsa juntos!" />
      <HelpedSave />
      <WhereAndWhen />
      <SpeakDonator />
      <Hemocionews />
      <Supporters />
    </div>
  )
}

export default Home
