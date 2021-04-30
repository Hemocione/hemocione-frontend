import styles from './ArrowButton.module.css'

const ArrowButton = ({link, text}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={styles.button}>
        {text}
        <img src="/arrow.svg" className={styles.arrow}/>
      </button>
    </a>
  );
}

export default ArrowButton
