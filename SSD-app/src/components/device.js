import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/styles";

export default function Device() {
  return (
    <View>
      <View style={styles.postContainer}>
        <Image
          source={require("../assets/connect.png")}
          resizeMode="contain"
          style={{ width: 34, height: 34 }}
        />
        <View>
          <Text>정연이</Text>
          <Text>현재 작동중</Text>
        </View>
        <Image
          source={require("../assets/menu.png")}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
    </View>
  );
}
