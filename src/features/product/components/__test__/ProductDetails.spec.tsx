import { Product } from "@/types";
import { render, screen } from "@testing-library/react-native";
import ProductDetails from "../ProductDetails";

const mockProduct: Product = {
  id: "1",
  name: "Wireless Mouse",
  description:
    "Ergonomic wireless mouse with adjustable DPI settings and long battery life.",
  price: 29.99,
  category: "Peripherals",
  stock: 150,
  sku: "WMOUSE-001",
  image_url: "https://example.com/images/wirelessmouse.jpg",
  rating: {
    rate: 4.5,
    count: 200,
  },
};

describe("ProductDetails", () => {
  it("renders the attributes correctly", () => {
    render(<ProductDetails product={mockProduct} />);

    expect(screen.getByText(mockProduct.id)).toBeOnTheScreen();
    expect(screen.getByText(mockProduct.name)).toBeOnTheScreen();
    expect(screen.getByText(mockProduct.price.toString())).toBeOnTheScreen();
    expect(screen.getByText(mockProduct.stock.toString())).toBeOnTheScreen();
    expect(screen.getByText(mockProduct.sku)).toBeOnTheScreen();
    expect(screen.getByText(mockProduct.category)).toBeOnTheScreen();
    expect(screen.getByText(mockProduct.description)).toBeOnTheScreen();
    expect(
      screen.getByText(mockProduct.rating.rate.toString()),
    ).toBeOnTheScreen();
    expect(
      screen.getByText(mockProduct.rating.count.toString()),
    ).toBeOnTheScreen();
  });
});
