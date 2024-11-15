export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
