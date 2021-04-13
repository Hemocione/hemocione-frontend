import {
    Footer,
    Navbar
} from "../components";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children}
            <Footer />
        </div>
    );
}

export default Layout