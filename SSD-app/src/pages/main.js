import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Device from "../components/device";
import styles from "../styles/styles";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>기기</Text>
      <Device />
    </View>
  );
}
