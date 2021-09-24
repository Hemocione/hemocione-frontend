import Head from 'next/head'
import PropTypes from 'prop-types'
import { Footer, Navbar } from '..'
import styles from './Layout.module.css'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Hemocione</title>
    </Head>
    <Navbar />

    <div className={styles.main}>{children}</div>

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
