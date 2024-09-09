import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../styles/styles";
import axios from "axios";

export default function Login({ navigation }) {
  function send() {
    axios
      .post("url", {
        phoneNumber: number,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("userData", res.data);
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
        setNumberError("전화번호를 다시 확인해주세요");
        setPasswordError("비밀번호를 다시 확인해주세요");
      });
  }
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [numberError, setNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Image
        resizeMode="contain"
        style={{ width: 300, height: 75 }}
        source={require("../assets/loginLogo.png")}
      />
      <Text style={styles.LoginText}>LOGIN</Text>
      <TextInput
        style={styles.input}
        required
        placeholder="전화번호를 입력하세요..."
        value={number}
      />
      <Text>{numberError}</Text>
      <TextInput
        required
        style={styles.input}
        placeholder="비밀번호를 입력하세요..."
        secureTextEntry
        value={password}
      />
      <Text>{passwordError}</Text>
      <TouchableOpacity>
        <Text style={styles.Button}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.Button}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
}
