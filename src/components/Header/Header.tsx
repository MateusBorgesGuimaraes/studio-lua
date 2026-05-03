import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <nav className={styles.headerNav}>
        <Logo />
        <ul>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#gallery">Galeria</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
