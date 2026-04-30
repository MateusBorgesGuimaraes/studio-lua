export type Categories = "Corte" | "Coloração" | "Tratamento";

type Image = {
  id: number;
  src: string;
  category: Categories;
  description: string;
};

export const IMAGES: Image[] = [
  {
    id: 1,
    src: "/slua-7.jpg",
    category: "Tratamento",
    description: "Hidratação profunda",
  },
  {
    id: 2,
    src: "/slua-6.jpg",
    category: "Coloração",
    description: "Ruivo cobreado intenso",
  },
  {
    id: 3,
    src: "/slua-5.jpg",
    category: "Coloração",
    description: "Balayage mel com reflexos dourados",
  },
  {
    id: 4,
    src: "/slua-4.jpg",
    category: "Corte",
    description: "Camadas longas e movimento",
  },
  {
    id: 5,
    src: "/slua-3.jpg",
    category: "Corte",
    description: "Bob estruturado com textura",
  },
  {
    id: 6,
    src: "/slua-1.jpg",
    category: "Corte",
    description: "Cacheamento de cabelo",
  },
  {
    id: 7,
    src: "/slua-2.jpg",
    category: "Tratamento",
    description: "Reconstrução capilar",
  },

  {
    id: 8,
    src: "generic-image.jpg",
    category: "Corte",
    description: "Camadas longas e movimento",
  },
  {
    id: 9,
    src: "generic-image.jpg",
    category: "Corte",
    description: "Bob estruturado com textura",
  },
  {
    id: 10,
    src: "generic-image.jpg",
    category: "Corte",
    description: "Cacheamento de cabelo",
  },
  {
    id: 11,
    src: "generic-image.jpg",
    category: "Corte",
    description: "Corte repicado moderno",
  },
  {
    id: 12,
    src: "generic-image.jpg",
    category: "Corte",
    description: "Franja leve com acabamento natural",
  },
  {
    id: 13,
    src: "generic-image.jpg",
    category: "Corte",
    description: "Corte reto elegante",
  },
  {
    id: 14,
    src: "generic-image.jpg",
    category: "Corte",
    description: "Short bob com volume",
  },

  {
    id: 15,
    src: "generic-image.jpg",
    category: "Coloração",
    description: "Ruivo cobreado intenso",
  },
  {
    id: 16,
    src: "generic-image.jpg",
    category: "Coloração",
    description: "Balayage mel com reflexos dourados",
  },
  {
    id: 17,
    src: "generic-image.jpg",
    category: "Coloração",
    description: "Loiro platinado uniforme",
  },
  {
    id: 18,
    src: "generic-image.jpg",
    category: "Coloração",
    description: "Moreno iluminado suave",
  },
  {
    id: 19,
    src: "generic-image.jpg",
    category: "Coloração",
    description: "Ombré hair degradê natural",
  },
  {
    id: 20,
    src: "generic-image.jpg",
    category: "Coloração",
    description: "Castanho chocolate com brilho",
  },
  {
    id: 21,
    src: "generic-image.jpg",
    category: "Coloração",
    description: "Fantasia rosa pastel",
  },

  {
    id: 22,
    src: "generic-image.jpg",
    category: "Tratamento",
    description: "Hidratação profunda",
  },
  {
    id: 23,
    src: "generic-image.jpg",
    category: "Tratamento",
    description: "Reconstrução capilar",
  },
  {
    id: 24,
    src: "generic-image.jpg",
    category: "Tratamento",
    description: "Nutrição intensiva com óleos",
  },
  {
    id: 25,
    src: "generic-image.jpg",
    category: "Tratamento",
    description: "Selagem térmica",
  },
  {
    id: 26,
    src: "generic-image.jpg",
    category: "Tratamento",
    description: "Botox capilar",
  },
  {
    id: 27,
    src: "generic-image.jpg",
    category: "Tratamento",
    description: "Cauterização dos fios",
  },
  {
    id: 28,
    src: "generic-image.jpg",
    category: "Tratamento",
    description: "Cronograma capilar completo",
  },
];
