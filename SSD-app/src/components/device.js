import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/styles";

export default function Device() {
  return (
    <View>
      <Text>정연이</Text>
      <Text>현재 작동중</Text>
      <Image
        source={require("../assets/menu.png")}
        resizeMode="contain"
        style={styles.icon}
      />
    </View>
  );
}
