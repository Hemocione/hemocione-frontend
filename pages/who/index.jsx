import styles from './Who.module.css'

import {
  WhoWeAre,
  Team
} from '../../components'

const Who = () => {
  return (
    <div className={styles.who}>
      <Team />
      <WhoWeAre />
    </div>
  )
}

export default Who