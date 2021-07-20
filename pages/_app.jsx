import PropTypes from 'prop-types'
import { Layout } from '../components'
import '../styles/globals.css'

/* eslint-disable react/jsx-props-no-spreading */
const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
/* eslint-enable react/jsx-props-no-spreading */

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.shape.isRequired,
}

export default MyApp
