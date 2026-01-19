import { Product } from "@/types";
import { render, screen } from "@testing-library/react-native";
import ProductOverview from "../ProductOverview";

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

describe("ProductOverview", () => {
  it("renders the attributes correctly", () => {
    render(<ProductOverview product={mockProduct} onPress={() => {}} />);

    expect(screen.getByText(mockProduct.name)).toBeOnTheScreen();
    expect(
      screen.getByText(`$${mockProduct.price.toString()}`),
    ).toBeOnTheScreen();
    expect(screen.getByText(mockProduct.category)).toBeOnTheScreen();
    expect(screen.getByText(mockProduct.description)).toBeOnTheScreen();
  });
});
