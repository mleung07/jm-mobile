import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import DetailsScreen from "./src/screens/DetailsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { makeStore } from "./src/store/store";

const queryClient = new QueryClient();

export const RootStack = createNativeStackNavigator({
  initialRouteName: "Login",
  screens: {
    Login: {
      screen: LoginScreen,
      options: { headerShown: false },
    },
    Home: {
      screen: HomeScreen,
      options: {
        title: "Home",
      },
    },
    Details: {
      screen: DetailsScreen,
      options: {
        title: "Details",
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={makeStore}>
        <Navigation />
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default App;
