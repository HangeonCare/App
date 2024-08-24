import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require("../assets/hamberger.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/SSDlogo.png")}
      />
    </View>
  );
}
