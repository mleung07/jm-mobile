import { RouteProp } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { fetchProduct } from "../features/product/api";
import ProductDetails from "../features/product/components/ProductDetails";
type DetailScreenRouteProp = RouteProp<{ params: { id: string } }, "params">;

const DetailsScreen = ({ route }: { route: DetailScreenRouteProp }) => {
  const { id } = route.params;

  const {
    isPending,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProduct(id),
  });

  if (isPending) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  if (error || !product) {
    return (
      <View>
        <Text>Error loading product details.</Text>
      </View>
    );
  }

  return <ProductDetails product={product} />;
};

const styles = StyleSheet.create({
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
});

export default DetailsScreen;
