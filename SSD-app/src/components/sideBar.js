import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function SideBar({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>정보</Text>
      <TouchableOpacity onPress={() => handleNavigation("Profile")}>
        <Text style={styles.sideBarText}>프로필</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("Settings")}>
        <Text style={styles.sideBarText}>설정</Text>
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
    position: "fixed",
    paddingTop: 60,
    zIndex: 1000,
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
    marginTop: 440,
  },
});
