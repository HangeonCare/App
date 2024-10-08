import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from "react-native";
import Device from "../components/device";
import AddDevice from "../components/addDevice";
import Header from "../components/header";
import styles from "../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";

export default function Main({ navigation }) {
  const [devices, setDevices] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      fetchDeviceData();
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchIdAndDeviceData = async () => {
      try {
        const storedId = await AsyncStorage.getItem("id");
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

  const fetchDeviceData = async () => {
    const storedId = await AsyncStorage.getItem("id");
    if (storedId) {
      await getDeviceData(storedId);
    }
  };

  const styless = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "start",
    },
    scrollView: {
      flex: 1,
    },
  });

  return (
    <View style={styless.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>기기</Text>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "start",
        }}
        style={styless.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {devices.length > 0 ? (
          devices.map((device) => {
            if (device.serialNumber) {
              return <Device devicedata={device} />;
            }
            return null;
          })
        ) : (
          <Text>기기가 없습니다.</Text>
        )}
        <AddDevice navigation={navigation} />
      </ScrollView>
    </View>
  );
}
