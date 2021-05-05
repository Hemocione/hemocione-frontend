import styles from './Who.module.css'

import {
  WhoWeAre
} from '../../components'

const Who = () => {
  return (
    <div className={styles.who}>
      <WhoWeAre />
    </div>
  )
}

export default Who