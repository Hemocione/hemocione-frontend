import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setIsExpanded(false);

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.on("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <img
        className={styles["hamburger-menu-icon"]}
        onClick={() => setIsExpanded(true)}
        src="/hamburger-menu.svg"
        alt="menu"
        width={46}
        height={48}
      />

      <MobileMenu
        isVisible={isExpanded}
        onDismissButtonTap={() => setIsExpanded(false)}
      />
    </>
  );
};

export default HamburgerMenu;
