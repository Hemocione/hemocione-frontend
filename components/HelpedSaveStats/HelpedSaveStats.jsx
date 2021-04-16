import styles from './HelpedSaveStats.module.css'
import {
  HelpedSaveStat
} from '..'

const HelpedSaveStats = () => {
  return (
    <div className={styles.backgroundContainer}>
      <ul className={styles.helpedSaveContainer}>
        <HelpedSaveStat number="15" text="aviões" />
        <HelpedSaveStat number="36" text="ônibus" />
        <HelpedSaveStat number="402" text="carros" />
        <HelpedSaveStat number="528" text="bolsas coletadas" />
        <HelpedSaveStat number="2112" text="pessoas ajudadas" />
      </ul>
    </div>
  );
}

export default HelpedSaveStats
