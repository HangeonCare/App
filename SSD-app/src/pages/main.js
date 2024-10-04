import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import Device from "../components/device";
import AddDevice from "../components/addDevice";
import Header from "../components/header";
import styles from "../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";

export default function Main({ navigation }) {
  const [devices, setDevices] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchIdAndDeviceData = async () => {
      try {
        const storedId = await AsyncStorage.getItem("id");
        setId(storedId);
        if (storedId) {
          await getDeviceData(storedId);
        }
      } catch (error) {
        console.log(error);
        Alert.alert("ID를 불러오는 데 실패했습니다.");
      }
    };

    fetchIdAndDeviceData();
  }, []);

  const getDeviceData = async (id) => {
    try {
      const res = await axios.get(`${url}/users/${id}/devices`);
      setDevices(res.data);
    } catch (err) {
      console.log(err);
      Alert.alert("기기 정보를 불러오는데 실패했습니다.");
    }
  };

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
