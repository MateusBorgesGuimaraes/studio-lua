import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <nav className={styles.headerNav}>
        <Logo />
        <ul>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Galeria</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
