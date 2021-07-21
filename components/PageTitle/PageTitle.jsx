import PropTypes from 'prop-types'
import styles from './PageTitle.module.css'

const PageTitle = ({ blackTitle, redTitle }) => (
  <h2 className={styles.title}>
    {blackTitle}
    <span className={styles.red}>{redTitle}</span>
  </h2>
)

PageTitle.propTypes = {
  blackTitle: PropTypes.string.isRequired,
  redTitle: PropTypes.string.isRequired,
}

export default PageTitle
