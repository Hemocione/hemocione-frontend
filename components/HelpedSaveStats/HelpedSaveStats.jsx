import { HelpedSaveStat } from '..'
import styles from './HelpedSaveStats.module.css'

const HelpedSaveStats = () => (
  <div className={styles.backgroundContainer}>
    <ul className={styles.helpedSaveContainer}>
      <HelpedSaveStat img='/helpedSave/airplane.svg' number='15' text='aviões' />
      <HelpedSaveStat img='/helpedSave/bus.svg' number='36' text='ônibus' />
      <HelpedSaveStat img='/helpedSave/car.svg' number='402' text='carros' />
      <HelpedSaveStat img='/helpedSave/bloodBag.svg' number='528' text='bolsas coletadas' />
      <HelpedSaveStat img='/helpedSave/runner.svg' number='2112' text='pessoas ajudadas' />
    </ul>
  </div>
)

export default HelpedSaveStats
