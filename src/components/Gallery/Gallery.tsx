import { IMAGES } from "../../utils";
import styles from "./Gallery.module.css";

export const Gallery = () => {
  return (
    <section className={`${styles.galleryContainer} `}>
      <div className={styles.side}>
        <div className={styles.sideLineLong}></div>
        <div className={styles.sideDot}></div>
        <span className={styles.sideText}>Portfólio 2024</span>
        <div className={styles.sideDot}></div>
        <div className={styles.sideLineLong}></div>
      </div>
      <div className={styles.galleryContent}>
        <div className={styles.headerGallery}>
          <div>
            <p className="eyebrow">PORTIFOLIO</p>
            <h2>
              Nossos <span className="dest">trabalhos</span>
            </h2>
          </div>
          <div className={styles.btns}>
            <button className="tag">Todos</button>
            <button className="tag">Corte</button>
            <button className="tag">Coloração</button>
            <button className="tag">Tratamento</button>
          </div>
        </div>
        <div className={styles.galleryGrid}>
          {IMAGES.map((item, index) => {
            const extraClass =
              index === 0 ? styles.wide : index === 1 ? styles.tall : "";

            return (
              <div
                key={item.src}
                className={`${styles.galleryItem} ${extraClass}`}
                data-category={item.category}
              >
                <div className={styles.photoBg}>
                  <img src={item.src} alt={item.description} />
                </div>

                <div className={styles.overlay}>
                  <p className={styles.itemSub}>{item.category}</p>
                  <p className={styles.itemLabel}>{item.description}</p>
                </div>

                <span className={styles.num}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.side} ${styles.sideRight}`}>
        <div className={styles.sideLineLong}></div>
        <div className={styles.sideDot}></div>
        <span className={styles.sideText}>São Paulo — SP</span>
        <div className={styles.sideDot}></div>
        <div className={styles.sideLineLong}></div>
      </div>
    </section>
  );
};
