import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Device from "../components/device";
import styles from "../styles/styles";
import Header from "../components/header";

export default function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>기기</Text>
      <Device />
    </View>
  );
}
