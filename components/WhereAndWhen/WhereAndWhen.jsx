import styles from './WhereAndWhen.module.css'

const WhereAndWhen = () => {
  return (
    <div className={styles.whereContainer}>
      <h2 className={styles.title}>
        Onde e 
        <a className={styles.red}>
          {" Quando"}
        </a>
      </h2>
    </div>
  )
}

export default WhereAndWhen