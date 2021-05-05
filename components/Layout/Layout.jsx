import Head from 'next/head'
import {
  Footer,
  Navbar
} from "..";

const Layout = ({ children }) => {
  return (
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
  );
}

export default Layout
