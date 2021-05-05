import styles from './Team.module.css'
import {
  PageTitle
} from '..'

const Team = () => {
  return (
    <div className={styles.container}>
      <PageTitle blackTitle={"Descubra o Nosso "} redTitle={"Time"} />
    </div>
  )
}

export default Team