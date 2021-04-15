import Link from 'next/link'
import styles from './ButtonWithLink.module.css'

const ButtonWithLink = ({link, text}) => {
  return (
    <Link href={link}>
      <button className={styles.button}>
        {text}
      </button>
    </Link>
  );
}

export default ButtonWithLink
