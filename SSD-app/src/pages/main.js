import React from "react";
import { View, Text } from "react-native";
import Device from "../components/device";
import AddDevice from "../components/addDevice";
import Header from "../components/header";
import styles from "../styles/styles";
import DurationPicker from "../components/setDate";
import axios from "axios";

export default function Main({ navigation }) {
  function getDeviceData() {
    axios
      .get("url")
      .then((res) => {
        localStorage.setItem("deviceData", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>기기</Text>
      <Device />
      <AddDevice navigation={navigation} />
      <DurationPicker />
    </View>
  );
}
