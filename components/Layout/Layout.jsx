import Head from 'next/head'
import PropTypes from 'prop-types'
import { Footer, Navbar } from '..'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Hemocione</title>
    </Head>
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
