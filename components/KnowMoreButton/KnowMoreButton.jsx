import Link from 'next/link'
import styles from './KnowMoreButton.module.css'

const KnowMoreButton = ({link, text}) => {
  return (
    <Link href={link}>
      <button className={styles.button}>
        {text}
        <img src="/arrow.svg" className={styles.arrow}/>
      </button>
    </Link>
  );
}

export default KnowMoreButton
