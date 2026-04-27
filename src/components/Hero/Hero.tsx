import { Header } from "../Header/Header";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.left}>
        <Header />
        <div className={styles.infosLeft}>
          <span className="eyebrow">Salão & Estética — São Paulo</span>
          <h1>
            Beleza que <br />
            <span className="dest">ilumina</span>
            <br /> quem você é.
          </h1>
          <p>
            Cortes, colorações e tratamentos capilares
            <br /> com técnica refinada e atenção ao detalhe.
            <br /> Para quem valoriza o cuidado real.
          </p>
          <button className="btn btn-primary">AGENDAR HORARIO</button>
        </div>
      </div>
      <div className={styles.right}></div>
    </section>
  );
};
