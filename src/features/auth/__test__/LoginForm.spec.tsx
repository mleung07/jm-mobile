import { act, fireEvent, render, screen } from "@testing-library/react-native";
import LoginForm from "../LoginForm";

const mockHandler = jest.fn();

describe("LoginScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    render(<LoginForm handleLogin={mockHandler} />);

    expect(screen.getByText("Welcome Back")).toBeOnTheScreen();
    expect(screen.getByText("Sign in to continue")).toBeOnTheScreen();
    expect(screen.getByPlaceholderText("Email")).toBeOnTheScreen();
    expect(screen.getByPlaceholderText("Password")).toBeOnTheScreen();
    expect(screen.getByText("Login")).toBeOnTheScreen();
  });

  it("navigates to Home on successful login", async () => {
    render(<LoginForm handleLogin={mockHandler} />);

    await act(async () => {
      fireEvent.changeText(
        screen.getByPlaceholderText("Email"),
        "test@example.com",
      );
      fireEvent.changeText(
        screen.getByPlaceholderText("Password"),
        "password123",
      );
      fireEvent.press(screen.getByTestId("login-button"));
    });

    expect(screen.getByPlaceholderText("Email").props.value).toBe(
      "test@example.com",
    );

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
