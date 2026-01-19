import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../../../types";

interface Props {
  product: Product;
  onPress: () => void;
}

const ProductOverview = ({ product, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      testID={`product-card-${product.id}`}
    >
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>

        {product.description && (
          <Text style={styles.description} numberOfLines={2}>
            {product.description}
          </Text>
        )}

        <View style={styles.footer}>
          {product.price && <Text style={styles.price}>${product.price}</Text>}

          {product.category && (
            <Text style={styles.category}>{product.category}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
  category: {
    fontSize: 12,
    color: "#999",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});

export default ProductOverview;
