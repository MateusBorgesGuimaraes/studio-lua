type Categories = "Corte" | "Coloração" | "Tratamento";
type Image = {
  src: string;
  category: Categories;
  description: string;
};

export const IMAGES: Image[] = [
  {
    src: "/slua-7.jpg",
    category: "Tratamento",
    description: "Hidratação profunda",
  },
  {
    src: "/slua-6.jpg",
    category: "Coloração",
    description: "Ruivo cobreado intenso",
  },
  {
    src: "/slua-5.jpg",
    category: "Coloração",
    description: "Balayage mel com reflexos dourados",
  },
  {
    src: "/slua-4.jpg",
    category: "Corte",
    description: "Camadas longas e movimento",
  },
  {
    src: "/slua-3.jpg",
    category: "Corte",
    description: "Bob estruturado com textura",
  },
  {
    src: "/slua-1.jpg",
    category: "Corte",
    description: "Cacheamento de cabelo",
  },
  {
    src: "/slua-2.jpg",
    category: "Tratamento",
    description: "Reconstrução capilar",
  },
];
