import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Home</Text>
        <TouchableOpacity onPress={handleLogout} testID="logout-button">
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
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
  logoutText: {
    fontSize: 16,
    color: "#007AFF",
  },
});

export default HomeScreen;
