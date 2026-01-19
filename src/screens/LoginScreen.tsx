import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert } from "react-native";
import LoginForm from "../components/LoginForm";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/slices/authSlice";

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleLogin = (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    // Simple validation for demo purposes
    if (email.includes("@") && password.length >= 6) {
      dispatch(login({ email }));
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Error",
        "Invalid credentials. Email must contain @ and password must be at least 6 characters.",
      );
    }
  };

  return <LoginForm handleLogin={handleLogin} />;
};

export default LoginScreen;
