import PropTypes from 'prop-types'
import { HelpedSaveStats } from '..'
import styles from './HelpedSave.module.css'

const HelpedSave = ({ bigNumbers }) => (
  <div>
    <h2 className={styles.helpedSaveHeader}>Até hoje nós ajudamos a salvar:</h2>
    <HelpedSaveStats aviao={bigNumbers.aviao} bolsas={bigNumbers.bolsas} carros={bigNumbers.carros} onibus={bigNumbers.onibus} pessoas={bigNumbers.pessoas} />
  </div>
)

HelpedSave.propTypes = {
  bigNumbers: PropTypes.isRequired
}

export default HelpedSave
