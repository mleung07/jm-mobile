import { RouteProp } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Text, View } from "react-native";
import { fetchProduct } from "../api/product";
import ProductDetails from "../components/ProductDetails";
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
      <View>
        <Text>Loading product details...</Text>
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

export default DetailsScreen;
