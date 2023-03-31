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
    imageURL: "https://placekitten.com/320/200",
    name: "Monitor 4K",
    price: 2200.00,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 2,
    imageURL: "https://placekitten.com/320/200",
    name: "Mouse RGB",
    price: 124.00,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 3,
    imageURL: "https://placekitten.com/320/200",
    name: "Placa de Vídeo 3090",
    price: 3020,
    stock: 0,

    description: "À vista no PIX",
  },
  {
    id: 4,
    imageURL: "https://placekitten.com/320/200",
    name: "Teclado Vermelho",
    price: 65,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 5,
    imageURL: "https://placekitten.com/320/200",
    name: "Teclado RGB",
    price: 137,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 6,
    imageURL: "https://placekitten.com/320/200",
    name: "Processador i9 13º geração",
    price: 2300,
    stock: 0,

    description: "À vista no PIX",
  },
  {
    id: 7,
    imageURL: "https://placekitten.com/320/200",
    name: "Monitor 22' HD",
    price: 1500,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 8,
    imageURL: "https://placekitten.com/320/200",
    name: "Mouse Rosa",
    price: 48,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 9,
    imageURL: "https://placekitten.com/320/200",
    name: "HD 1TB",
    price: 99,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 10,
    imageURL: "https://placekitten.com/320/200",
    name: "SSD 240GB",
    price: 234,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 11,
    imageURL: "https://placekitten.com/320/200",
    name: "HD 500GB",
    price: 56,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 12,
    imageURL: "https://placekitten.com/320/200",
    name: "Memória RAM 8GB",
    price: 300,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 13,
    imageURL: "https://placekitten.com/320/200",
    name: "Memória RAM 16GB",
    price: 580,
    stock: 10,

    description: "À vista no PIX",
  },
  {
    id: 14,
    imageURL: "https://placekitten.com/320/200",
    name: "Monitor 8K",
    price: 4100,
    stock: 10,

    description: "À vista no PIX",
  }
]