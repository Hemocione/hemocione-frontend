import { HelpedSaveStats } from '..'
import styles from './HelpedSave.module.css'

const HelpedSave = () => (
  <div>
    <h2 className={styles.helpedSaveHeader}>Até hoje nós ajudamos a salvar:</h2>
    <HelpedSaveStats />
  </div>
)

export default HelpedSave
