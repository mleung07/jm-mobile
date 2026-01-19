import { StaticParamList } from "@react-navigation/native";
import { RootStack } from "./src/screens";

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export {};
