import React from "react";
import { View, Text, Image } from "react-native";

export default function Device() {
  return (
    <View>
      <Text>할머니</Text>
      <Text>현재 작동중</Text>
      <Image source={require("../assets/menu.png")} />
    </View>
  );
}
