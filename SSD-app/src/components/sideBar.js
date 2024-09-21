import axios from "axios";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SideBar({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const logout = async () => {
    Alert.alert(
      "로그아웃",
      "로그아웃 하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "확인",
          onPress: async () => {
            try {
              const userId = await AsyncStorage.getItem("userId");
              if (userId) {
                const response = await axios.post("url", { userId });
                console.log(response);
                await AsyncStorage.removeItem("userId");
                navigation.navigate("login");
              }
            } catch (err) {
              console.log(err);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>정보</Text>
      <TouchableOpacity onPress={() => handleNavigation("Profile")}>
        <Text style={styles.sideBarText}>프로필</Text>
      </TouchableOpacity>
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
