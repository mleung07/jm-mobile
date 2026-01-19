import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../store/hooks";

const HomeScreen = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome , {user?.email}</Text>
      </View>
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
});

export default HomeScreen;
