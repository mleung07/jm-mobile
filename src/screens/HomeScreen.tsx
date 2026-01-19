import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Product, RootStackParamList } from "../../types";
import { fetchProducts } from "../features/product/api";
import ProductFlatList from "../features/product/components/ProductFlatList";
import { useAppSelector } from "../store/hooks";

type DetailsScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "Details"
>;

const HomeScreen = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleProductPress = (product: Product) => {
    navigation.navigate("Details", {
      id: product.id,
    });
  };

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <TouchableOpacity style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome , {user?.email}</Text>
      </View>

      {isPending ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Loading products...</Text>
        </View>
      ) : (
        <ProductFlatList products={data || []} onPress={handleProductPress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
  },
  retryButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomeScreen;
