import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.footerContainer}`}>
      <div className={`${styles.footerDisplay}`}>
        <div>
          <Logo />
          <p className={styles.desc}>
            Salão de beleza especializado em cortes, <br /> colorações e
            tratamentos capilares de
            <br /> alto padrão.
          </p>
        </div>
        <div className={styles.block}>
          <h3 className="eyebrow">ENDEREÇO</h3>
          <p>Rua das Flores, 142</p>
          <p>Jardins — São Paulo, SP</p>
          <p>CEP 01452-000</p>
          <p>Ver no mapa →</p>
        </div>

        <div className={styles.block}>
          <h3 className="eyebrow">HORARIOS</h3>
          <div className={styles.hours}>
            <span>Seg – Sex</span> <span>9h – 19h</span>
          </div>

          <div className={styles.hours}>
            <span>Sábado</span> <span>9h – 17h</span>
          </div>

          <div className={styles.hours}>
            <span>Domingo</span> <span>Fechado</span>
          </div>
        </div>

        <div className={styles.block}>
          <h3 className="eyebrow">serviços</h3>
          <p>Corte feminino</p>
          <p>Corte masculino</p>
          <p>Coloração</p>
          <p>Balayage</p>
          <p>Tratamentos</p>
          <p>Escova progressiva</p>
        </div>

        <div className={styles.block}>
          <h3 className="eyebrow">CONTATO</h3>
          <p>(11) 99999-0000</p>
          <p>contato@studiolua.com.br</p>
        </div>
      </div>

      <div className={styles.footerDown}>
        <span>© 2024 Studio Lua — Todos os direitos reservados</span>

        <div>
          <span className={styles.ball}></span>
          <p>Instagram</p>
          <p>TikTok</p>
          <p>Pinterest</p>
        </div>
      </div>
    </footer>
  );
};
