export type CartItem = {
  product: Product;
  quantity: number;
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  description?: string;
  img: string;
  size?: string;
  tags?: string[];
};
