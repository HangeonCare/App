import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "../styles/styles";
import axios from "axios";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "";
const id = AsyncStorage.getItem("id");

export default function RegisterDevice({ navigation }) {
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");

  function send() {
    if (number === "") {
      setNumberError("시리얼 번호를 입력하세요.");
      return;
    } else {
      axios
        .post(`${url}/users/${id}/devices`, { serial_number: number })
        .then((res) => {
          console.log(res);
          navigation.navigate("Drawer");
        })
        .catch((err) => {
          console.log(err);
          setNumberError("시리얼 번호를 다시 확인해주세요");
        });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 60,
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: 100, height: 40 }}
          source={require("../assets/SSDlogo.png")}
        />
        <Text style={styles.LoginText}>기기 연결</Text>
        <TextInput
          value={number}
          onChangeText={(text) => setNumber(text)}
          placeholder="시리얼 번호를 입력하세요..."
          style={styles.input}
        />
        {numberError ? (
          <Text style={{ color: "red" }}>{numberError}</Text>
        ) : null}
        <View style={{ display: "flex", gap: 12 }}>
          <TouchableOpacity onPress={send}>
            <Text style={styles.Button}>연결하기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.Button}>돌아가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
