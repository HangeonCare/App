import axios from "axios";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";
const id = AsyncStorage.getItem("id");

export default function SideBar({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const logout = () => {
    axios
      .post(`${url}/users/logout`, { userId: id })
      .then((res) => {
        alert("로그아웃 되었습니다");
      })
      .catch((err) => {
        console.log(err);
        alert("로그아웃 실패");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>정보</Text>
      <TouchableOpacity onPress={logout}>
        <Text style={styles.sideBarText}>로그아웃</Text>
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={require("../assets/SSDTeamlogo.png")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#4F1787",
    alignItems: "center",
    paddingTop: 60,
    gap: 5,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 40,
  },
  sideBarText: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
    marginVertical: 10,
  },
  logo: {
    width: 86,
    height: 38,
    marginTop: "auto",
  },
});
