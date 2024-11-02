import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header({ navigation }) {
  const logout = () => {
    AsyncStorage.removeItem("id");
    navigation.navigate("login");
  };
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/SSDlogo.png")}
      />
      <TouchableOpacity onPress={logout}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}
