import React from "react";
import { View, Text } from "react-native";
import Device from "../components/device";
import AddDevice from "../components/addDevice";
import Header from "../components/header";
import styles from "../styles/styles";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation.navigate("Drawer")} />
      <Text style={styles.title}>기기</Text>
      <Device />
      <AddDevice />
    </View>
  );
}
