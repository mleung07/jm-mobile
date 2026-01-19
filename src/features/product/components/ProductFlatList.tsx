import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Product } from "../../../../types";
import ProductOverview from "./ProductOverview";

interface Props {
  products: Product[];
  onPress: (arg0: Product) => void;
}

const HomeScreen = ({ products, onPress }: Props) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductOverview product={item} onPress={() => onPress(item)} />
      )}
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products available</Text>
        </View>
      }
    />
  );
};
const styles = StyleSheet.create({
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    padding: 40,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
});

export default HomeScreen;
