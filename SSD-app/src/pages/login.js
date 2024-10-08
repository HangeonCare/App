import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SSDlogo from "../assets/SSDlogo.png";

const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";

export default function Login({ navigation }) {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [numberError, setNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [numberTouched, setNumberTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  function validatePhoneNumber() {
    if (number === "") {
      setNumberError("전화번호를 입력하세요.");
    } else {
      setNumberError("");
    }
  }

  function validatePassword() {
    if (password === "") {
      setPasswordError("비밀번호를 입력하세요.");
    } else {
      setPasswordError("");
    }
  }

  function send() {
    validatePhoneNumber();
    validatePassword();

    if (!numberError && !passwordError) {
      axios
        .post(`${url}/users/login`, {
          phoneNumber: number,
          password: password,
        })
        .then((res) => {
          AsyncStorage.setItem("id", JSON.stringify(res.data.userId));
          navigation.navigate("Drawer");
        })
        .catch((err) => {
          console.log(err);
          setNumberError("전화번호를 다시 확인해주세요");
          setPasswordError("비밀번호를 다시 확인해주세요");
          setNumber("");
          setPassword("");
        });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          padding: 20,
          paddingTop: 100,
          paddingBottom: 40,
          flex: 1,
          justifyContent: "space-between",
          alignItems: "start",
          gap: 20,
        }}
      >
        <View>
          <View style={{ marginBottom: 30 }}>
            <Image
              resizeMode="contain"
              style={{ width: 100, height: 40, marginBottom: 15 }}
              source={SSDlogo}
            />
            <Text style={{ color: "#555555" }}>
              로그인 후 기기를 등록 할 수 있어요
            </Text>
          </View>
          <Text style={styles.LoginText}>로그인</Text>
          <View style={{ display: "flex", gap: 20 }}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="전화번호를 숫자만 입력해주세요"
                value={number}
                onChangeText={(text) => {
                  setNumber(text);
                  if (numberTouched) validatePhoneNumber();
                }}
                onBlur={() => {
                  setNumberTouched(true);
                  validatePhoneNumber();
                }}
              />
              {numberTouched && (
                <Text style={{ color: "red" }}>{numberError}</Text>
              )}
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="비밀번호를 입력하세요..."
                secureTextEntry
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordTouched) validatePassword();
                }}
                onBlur={() => {
                  setPasswordTouched(true);
                  validatePassword();
                }}
              />
              {passwordTouched && (
                <Text style={{ color: "red" }}>{passwordError}</Text>
              )}
            </View>
          </View>
        </View>
        <View style={{ display: "flex", gap: "20" }}>
          <TouchableOpacity
            style={{
              paddingVertical: 18,
              paddingHorizontal: 140,
              borderRadius: 12,
              backgroundColor: number && password ? "#EB3678" : "#E1E1E1",
            }}
            onPress={send}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: number && password ? "white" : "black",
              }}
            >
              로그인
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.Button}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
