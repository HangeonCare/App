import React from "react";
import { View, Text } from "react-native";
import Device from "../components/device";
import AddDevice from "../components/addDevice";
import Header from "../components/header";
import styles from "../styles/styles";
import DurationPicker from "../components/setDate";

export default function Main({ navigation }) {
  function getDeviceData(){
    axios.get("url").tten(res=>{
      localStorage.setItem(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <View style={styles.container}>
      <Header navigation={navigation.navigate("Drawer")} />
      <Text style={styles.title}>기기</Text>
      <Device />
      <AddDevice />
      <DurationPicker />
    </View>
  );
}
