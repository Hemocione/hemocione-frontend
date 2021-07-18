import Link from "next/link";
import styles from "./Links.module.css";

const Links = () => (
  <ul className={styles.links}>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/who">Quem Somos</Link>
    </li>
    <li>
      <Link href="/where">Onde e Quando</Link>
    </li>
    <li>
      <Link href="/faq">Dúvidas Frequentes</Link>
    </li>
    <li>
      <Link href="/sign-up">Cadastre-se</Link>
    </li>
    <li>
      <Link href="/site-map">Site Map</Link>
    </li>
    <li>
      <Link href="/policy-and-privacy">Política e Privacidade</Link>
    </li>
  </ul>
);

export { Links };
