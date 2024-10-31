import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";
import axios from "axios";

const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";

export default function Header({ navigation }) {
  const logout = () => {
    axios
      .post(`${url}/users/logout`)
      .then((res) => {
        alert("로그아웃 되었습니다");
        navigation.navigate("login");
      })
      .catch((err) => {
        console.log(err);
        alert("로그아웃 실패");
      });
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
