export type SlideData = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const slideData: SlideData[] = [
  {
    id: 1,
    title: "Design que chama atenção",
    description: "Uma apresentação visual moderna para destacar seu conteúdo.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    alt: "Carro esportivo em uma estrada",
  },
  {
    id: 2,
    title: "Explore novas possibilidades",
    description: "Use o carrossel para apresentar produtos, projetos ou imagens.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=85",
    alt: "Carro esportivo em destaque",
  },
  {
    id: 3,
    title: "Seu próximo projeto",
    description: "Navegue pelos slides usando as setas ou os indicadores.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=85",
    alt: "Carro em uma paisagem urbana",
  },
];
