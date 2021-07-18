import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ onDismissButtonTap }) => (
  <header>
    <button
      className={styles["dismiss-button"]}
      name="dismiss"
      onClick={onDismissButtonTap}
      type="button"
      aria-hidden="true"
    >
      <span>Fechar</span>
    </button>

    <img src="/title.svg" alt="Hemocione" width={180} height={20} />

    <div className={styles["sign-up-and-login"]}>
      <span>
        <Link href="/sign-up">Registrar</Link>
      </span>
      <span>
        <Link href="/login">Entrar</Link>
      </span>
      <img src="/user-circle.svg" alt="Usuário" />
    </div>
  </header>
);

Header.propTypes = {
  onDismissButtonTap: PropTypes.func.isRequired,
};

export { Header };
