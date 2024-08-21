import React from "react";
import { View, Text, Image } from "react-native";

export default function Device() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/connection/cantConnect.png")} />
      <View>
        <Text>할머니</Text>
        <Text>현재 작동중</Text>
      </View>
      <Image source={require("../assets/menu.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroudnColor: "white",
  },
  textWrapper: {
    justifyContent: "center",
  },
});
