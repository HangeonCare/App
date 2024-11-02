import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
export default function Header({ navigation }) {
  const confirmLogout = () => {
    Alert.alert(
      "로그아웃 확인",
      "정말 로그아웃하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "확인",
          onPress: logout,
          style: "default",
        },
      ],
      { cancelable: true }
    );
  };
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
      <TouchableOpacity onPress={confirmLogout}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}
