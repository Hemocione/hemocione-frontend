import styles from './HelpedSave.module.css'
import {
  HelpedSaveStats
} from '..'

const HelpedSave = () => {
  return (
    <div>
      <h2 className={styles.helpedSaveHeader}>
        Até hoje nós ajudamos a salvar:
      </h2>
      <HelpedSaveStats />
    </div>
  );
}

export default HelpedSave
