import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Device from "../components/device";
import AddDevice from "../components/addDevice";
import Header from "../components/header";
import styles from "../styles/styles";
import axios from "axios";

const url = "";

export default function Main({ navigation }) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getDeviceData();
  }, []);

  function getDeviceData() {
    axios
      .get(`${url}/users/${id}/devices`)
      .then((res) => {
        setDevices(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("기기 정보를 불러오는데 실패했습니다.");
      });
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>기기</Text>
      {devices.map((device) => (
        <Device key={device.serialNumber} device={device} />
      ))}
      <AddDevice navigation={navigation} />
    </View>
  );
}
