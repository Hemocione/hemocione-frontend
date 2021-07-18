import styles from "./Footer.module.css";
import { links } from "./links";

const linkToIconMap = {
  instagram: "/instagramWhite.svg",
  youtube: "/youtubeWhite.svg",
  facebook: "/facebookWhite.svg",
  linkedin: "/linkedinWhite.svg",
};

const email = "contato@hemocione.com.br";

const phone = {
  countryCode: "55",
  stateCode: "21",
  number: "991596646",
};

const Footer = () => {
  const phoneNumber = `+${phone.countryCode} ${phone.stateCode} ${phone.number}`;

  return (
    <footer className={styles.footer}>
      <span className={styles.bold}>Fala com a gente!</span>

      <div className={styles.contacts}>
        <a href={`tel:+${phone.countryCode}${phone.stateCode}${phone.number}`}>
          <span className={`${styles.bold} ${styles.contact}`}>telefone</span>
          <span>{phoneNumber}</span>
        </a>

        <a href={`mailto:${email}`}>
          <span className={`${styles.bold} ${styles.contact}`}>email</span>
          <span>{email}</span>
        </a>
      </div>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <img src={linkToIconMap[link.type]} alt={link.type} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export { Footer };
