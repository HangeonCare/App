import React, { useState } from "react";
import { View, Text } from "react-native";
import Device from "../components/device";
import AddDevice from "../components/addDevice";
import Header from "../components/header";
import styles from "../styles/styles";
import axios from "axios";
import PopUp from "../components/popUp";

export default function Main({ navigation }) {
  const [serialNumber, setSerialNumber] = useState(null);
  function getDeviceData() {
    axios
      .get("url")
      .then((res) => {
        setSerialNumber(res.serialNumber);
        PopUp(serialNumber);
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
    </View>
  );
}
