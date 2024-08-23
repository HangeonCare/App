import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const background = require("../assets/background.png");

export default function Start() {
  return (
    <ImageBackground source={background} style={styles.container}>
      <View>
        <ImageBackground />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
