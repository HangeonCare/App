import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import styles from "../styles/styles";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";
const numberRegex = /^\d{6}$/;

export default function RegisterDevice({ navigation }) {
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [id, setId] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getID = async () => {
      try {
        const Id = await AsyncStorage.getItem("id");
        if (Id !== null) {
          setId(Id);
          await send();
        } else {
          setNumberError("ID가 존재하지 않습니다.");
        }
      } catch (error) {
        console.log(error);
        Alert.alert("ID를 불러오는 데 실패했습니다.");
      }
    };
    getID();
  }, []);

  async function send() {
    if (!number.match(numberRegex)) {
      serNumberError("시리얼 번호는 6자리 숫자입니다.");
      return;
    }
    if (number === "") {
      setNumberError("시리얼 번호를 입력하세요.");
      return;
    }
    try {
      const res = await axios.post(`${url}/users/${id}/devices`, {
        serialNumber: number,
      });
      console.log(res);
      navigation.navigate("Main");
    } catch (err) {
      console.log(err);
      setError(true);
      setNumberError("시리얼 번호를 다시 확인해주세요");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          gap: 60,
          padding: 20,
        }}
      >
        <View>
          <Image
            resizeMode="contain"
            style={{ width: 100, height: 40 }}
            source={require("../assets/SSDlogo.png")}
          />
          <Text style={{ color: "#555555" }}>
            기기의 알림 기간을 설정할 수 있어요
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 28, marginTop: 0 }}>
          기기 연결
        </Text>
        <View>
          <TextInput
            value={number}
            onChangeText={(text) => setNumber(text)}
            placeholder="시리얼 번호를 입력하세요..."
            style={styles.input}
          />
          {error ? <Text style={{ color: "red" }}>{numberError}</Text> : null}
        </View>
        <View style={{ display: "flex", gap: 12, marginTop: 220 }}>
          <TouchableOpacity
            style={{
              paddingVertical: 18,
              paddingHorizontal: 140,
              borderRadius: 12,
              backgroundColor: number === "" ? "#E1E1E1" : "#EB3678",
            }}
            onPress={send}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: number === "" ? "black" : "white",
              }}
            >
              연결하기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.Button}>돌아가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
