import styles from './HelpedSaveStat.module.css'

const HelpedSaveStat = ({number, text}) => {
  return (
    <li className={styles.statContainer}>
      <h2 className={styles.number}>
        {number}
      </h2>
      <h3 className={styles.text}>
        {text}
      </h3>
    </li>
  );
}

export default HelpedSaveStat
