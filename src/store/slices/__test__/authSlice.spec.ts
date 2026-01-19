import authReducer, { login, logout } from "../authSlice";

describe("authSlice", () => {
  const initialState = {
    user: null,
    isAuthenticated: false,
  };

  it("should handle initial state", () => {
    expect(authReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle login", () => {
    const user = { email: "test@example.com", name: "Test User" };
    const actual = authReducer(initialState, login(user));
    expect(actual.user).toEqual(user);
    expect(actual.isAuthenticated).toBe(true);
  });

  it("should handle logout", () => {
    const authenticatedState = {
      user: { email: "test@example.com", name: "Test User" },
      isAuthenticated: true,
      loading: false,
    };
    const actual = authReducer(authenticatedState, logout());
    expect(actual.user).toBe(null);
    expect(actual.isAuthenticated).toBe(false);
  });
});
