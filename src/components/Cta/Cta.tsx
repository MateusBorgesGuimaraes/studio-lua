import styles from "./Cta.module.css";

export const Cta = () => {
  return (
    <section className={`${styles.ctaContainer} container`}>
      <div>
        <p className="eyebrow">Agende seu horário</p>
        <h2>
          Pronta para o seu <br />
          <span className="dest">Pronta para o seu novo visual?</span>
        </h2>
        <p>
          Atendimento personalizado, com hora marcada. Entre em contato <br /> e
          garanta seu horário esta semana.
        </p>
      </div>

      <button className="btn btn-primary">
        <img src="/whatsapp-icon.svg" /> CHAMAR NO WHATSAPP
      </button>
    </section>
  );
};
