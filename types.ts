export interface User {
  email: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  sku: string;
  image_url: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: { id: string };
};
