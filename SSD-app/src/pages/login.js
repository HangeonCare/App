import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from "react";
import styles from "../styles/styles";

export default function Login() {
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
        placeholder="아이디를 입력하세요..."
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력하세요..."
      ></TextInput>
      <TouchableOpacity>
        <Text style={styles.Button}>로그인</Text>
      </TouchableOpacity>
      <Text>계정 만들기</Text>
    </View>
  );
}
