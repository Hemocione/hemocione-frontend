import cx from "classnames/bind";
import PropTypes from "prop-types";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Links } from "./Links";
import styles from "./MobileMenu.module.css";

const classNames = cx.bind(styles);

const MobileMenu = ({ isVisible, onDismissButtonTap }) => {
  const className = classNames({
    menu: "menu",
    expanded: isVisible,
  });

  return (
    <div className={className}>
      <Header onDismissButtonTap={onDismissButtonTap} />
      <Links />
      <Footer />
    </div>
  );
};

MobileMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onDismissButtonTap: PropTypes.func.isRequired,
};

export { MobileMenu };
