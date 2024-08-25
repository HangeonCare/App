import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/styles";

export default function SideBar() {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <View>
      <View
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: "#4F1787",
          width: 210,
          alignItems: "center",
          position: "ablolute",
          right: 92,
          bottom: 450,
          gap: 40,
          paddingTop: 30,
        }}
      >
        <Text style={{ color: "white", fontSize: 32, fontWeight: 700 }}>
          정보
        </Text>
        <TouchableOpacity onPress={() => handleNavigation("/login")}>
          <Text style={styles.sideBarText}>프로필</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("/signup")}>
          <Text style={styles.sideBarText}>로그아웃</Text>
        </TouchableOpacity>
        <Image
          style={{ width: 86, height: 38, marginTop: 480 }}
          source={require("../assets/SSDTeamlogo.png")}
          resizeMode="contain"
        ></Image>
      </View>
    </View>
  );
}
