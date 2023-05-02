export interface IProduct {
  id: number,
  imageURL: string,
  name: string,
  price: number,
  stock: number,
  description: string
}

export interface ICartProduct extends IProduct {
  quantity: number
}

export const products : IProduct[] = [
  {
    id: 1,
    imageURL: "./assets/products-image/monitor.jpg",
    name: "Monitor 4K",
    price: 2200.00,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 2,
    imageURL: "./assets/products-image/mouse-3.jpg",
    name: "Mouse RGB",
    price: 124.00,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 3,
    imageURL: "./assets/products-image/placa-video-1.jpg",
    name: "Placa de Vídeo",
    price: 3020,
    stock: 0,

    description: "À vista no PIX",
  },
  {
    id: 4,
    imageURL: "./assets/products-image/teclado3.jpg",
    name: "Teclado Branco",
    price: 65,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 5,
    imageURL: "./assets/products-image/teclado1.jpg",
    name: "Teclado RGB",
    price: 137,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 6,
    imageURL: "./assets/products-image/processador.jpg",
    name: "Processador i9",
    price: 2300,
    stock: 0,

    description: "À vista no PIX",
  },
  {
    id: 7,
    imageURL: "./assets/products-image/monitor-1.jpg",
    name: "Monitor 22' HD",
    price: 1500,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 8,
    imageURL: "./assets/products-image/mouse-4.jpg",
    name: "Mouse Sem Fio",
    price: 48,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 9,
    imageURL: "./assets/products-image/hd.jpg",
    name: "HD 1TB",
    price: 99,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 10,
    imageURL: "./assets/products-image/fone-de-ouvido-1.jpg",
    name: "Fone de Ouvido Sem Fio",
    price: 234,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 11,
    imageURL: "./assets/products-image/hd1.jpg",
    name: "HD 500GB",
    price: 56,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 12,
    imageURL: "./assets/products-image/laptop-1.jpg",
    name: "Notebook",
    price: 1960,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 13,
    imageURL: "./assets/products-image/laptop-2.jpg",
    name: "Notebook Cinza",
    price: 1280,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 14,
    imageURL: "./assets/products-image/monitor-1.jpg",
    name: "Monitor 8K",
    price: 4100,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 15,
    imageURL: "./assets/products-image/processador1.jpg",
    name: "Processador 7",
    price: 2000,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 16,
    imageURL: "./assets/products-image/monitor-2.jpg",
    name: "Monitor Full HD",
    price: 1700,
    stock: 10,

    description: "À vista no PIX",
  }
]