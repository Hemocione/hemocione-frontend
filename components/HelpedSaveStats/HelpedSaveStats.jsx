import PropTypes from 'prop-types'
import { HelpedSaveStat } from '..'
import styles from './HelpedSaveStats.module.css'

const HelpedSaveStats = ({ aviao, bolsas, carros, onibus, pessoas }) => (
  <div className={styles.backgroundContainer}>
    <ul className={styles.helpedSaveContainer}>
      <HelpedSaveStat img='/helpedSave/airplane.svg' number={aviao} text='aviões' />
      <HelpedSaveStat img='/helpedSave/bus.svg' number={onibus} text='ônibus' />
      <HelpedSaveStat img='/helpedSave/car.svg' number={carros} text='carros' />
      <HelpedSaveStat img='/helpedSave/bloodBag.svg' number={bolsas} text='bolsas coletadas' />
      <HelpedSaveStat img='/helpedSave/runner.svg' number={pessoas} text='pessoas ajudadas' />
    </ul>
  </div>
)

HelpedSaveStats.propTypes = {
  aviao: PropTypes.isRequired,
  bolsas: PropTypes.isRequired,
  carros: PropTypes.isRequired,
  onibus: PropTypes.isRequired,
  pessoas: PropTypes.isRequired,
}

export default HelpedSaveStats
