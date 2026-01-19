import { RouteProp } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { fetchProduct } from "../api/product";

interface DetailScreenRouteProp = RouteProp<{ params: { id: string } }, "params">;

interface DetailRowProp {
  label: string;
  value: string | number;
}

const DetailRow = ({ label, value }: DetailRowProp) => (
  <View style={styles.detailRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value || "N/A"}</Text>
  </View>
);

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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.name}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Product Details</Text>

            <DetailRow label="ID" value={product.id} />
            <DetailRow label="Sku" value={product.sku} />
            <DetailRow label="Description" value={product.description} />
            <DetailRow label="Price" value={product.price} />
            <DetailRow label="Category" value={product.category} />
            <DetailRow label="Stock" value={product.stock} />
            <DetailRow label="AverageRating" value={product.rating.rate} />
            <DetailRow label="Rating Count" value={product.rating.count} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "#e0e0e0",
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 16,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  label: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  value: {
    fontSize: 14,
    color: "#333",
    textAlign: "right",
  },
});

export default DetailsScreen;
