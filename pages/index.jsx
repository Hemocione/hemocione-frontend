import PropTypes from 'prop-types'
import { Banner, HelpedSave, SpeakDonator, Supporters, BloodBankMap } from '../components'
import { getSheetsData } from '../utils/spreadsheets'

const Home = ({ sheets }) => (
  <div>
    <Banner endTitle='CIONAR JUNTOS!' img='/bannerVitor.png' redTitle='HEMO' startTitle='VAMOS ' />
    <HelpedSave bigNumbers={sheets.bigNumbers} />
    {/* <WhereAndWhen /> */}
    <BloodBankMap />
    <SpeakDonator videos={sheets.speakDonator} />
    <Supporters />
  </div>
)

Home.propTypes = {
  sheets: PropTypes.isRequired,
}

export const getStaticProps = async () => {
  const sheetsData = await getSheetsData()
  return { props: { sheets: sheetsData }, revalidate: 43200 }
}

export default Home
