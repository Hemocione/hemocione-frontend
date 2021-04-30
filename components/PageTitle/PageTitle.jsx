import styles from './PageTitle.module.css'

const PageTitle = ({blackTitle, redTitle}) => {
  return (
    <h2 className={styles.title}>
      {blackTitle}
      <span className={styles.red}>
        {redTitle}
      </span> 
    </h2>
  )
}

export default PageTitle