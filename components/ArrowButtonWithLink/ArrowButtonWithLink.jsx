import Link from 'next/link'
import styles from './ArrowButtonWithLink.module.css'

const ArrowButtonWithLink = ({link, text}) => {
  return (
    <Link href={link}>
      <button className={styles.button}>
        {text}
        <img src="/arrow.svg" className={styles.arrow}/>
      </button>
    </Link>
  );
}

export default ArrowButtonWithLink
