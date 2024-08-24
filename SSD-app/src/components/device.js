import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/styles";
import PopUp from "../components/popUp";

export default function Device() {
  return (
    <View>
      <View style={styles.postContainer}>
        <Image
          source={require("../assets/connect.png")}
          resizeMode="contain"
          style={{ width: 34, height: 34 }}
        />
        <View
          style={{
            marginLeft: -140,
          }}
        >
          <Text style={styles.user}>정연이</Text>
          <Text style={styles.time}>현재 작동중</Text>
        </View>
        <Image
          source={require("../assets/menu.png")}
          resizeMode="contain"
          style={styles.icon}
        ></Image>
        <PopUp />
      </View>
    </View>
  );
}
