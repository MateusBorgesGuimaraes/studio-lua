import { useState } from "react";
import { IMAGES, type Categories } from "../../utils";
import styles from "./Gallery.module.css";

export const Gallery = () => {
  const [seeAll, setSeeAll] = useState(false);
  const [category, setCategory] = useState<Categories | "Todos">("Todos");
  let images = seeAll ? IMAGES : IMAGES.slice(0, 7);
  images =
    category === "Todos"
      ? images
      : IMAGES.filter((img) => {
          return img.category === category;
        }).slice(0, 7);

  return (
    <section id="gallery" className={`${styles.galleryContainer} `}>
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
            <button
              onClick={() => setCategory("Todos")}
              className={`tag ${category === "Todos" ? "active" : ""}`}
            >
              Todos
            </button>
            <button
              onClick={() => setCategory("Corte")}
              className={`tag ${category === "Corte" ? "active" : ""}`}
            >
              Corte
            </button>
            <button
              onClick={() => setCategory("Coloração")}
              className={`tag ${category === "Coloração" ? "active" : ""}`}
            >
              Coloração
            </button>
            <button
              onClick={() => setCategory("Tratamento")}
              className={`tag ${category === "Tratamento" ? "active" : ""}`}
            >
              Tratamento
            </button>
          </div>
        </div>
        <div className={styles.galleryGrid}>
          {images.map((item, index) => {
            const extraClass =
              index === 0 ? styles.wide : index === 1 ? styles.tall : "";

            return (
              <div
                key={item.id}
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
        <div className={styles.galleryFooter}>
          <p>
            Mostrando {images.length} de {IMAGES.length} resultados
          </p>

          <button onClick={() => setSeeAll(!seeAll)} className="btn btn-ghost">
            {seeAll ? "VER MENOS" : "VER GALERIA COMPLETA"}
          </button>
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
