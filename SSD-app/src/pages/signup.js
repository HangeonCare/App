import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from "react";
import styles from "../styles/styles";
import axios from "axios";

export default function SignUp() {
  const [number, setNumber] = React.useState("");
  const [numberCheck, setNumberCheck] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  const [isNumber, setIsNumber] = React.useState(false);
  const [isNumberCheck, setIsNumberCheck] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordCheck, setIsPasswordCheck] = React.useState(false);

  const [NumberError, setNumberError] = React.useState("");
  const [NumberCheckError, setNumberCheckError] = React.useState("");
  const [PasswordError, setPasswordError] = React.useState("");
  const [PasswordCheckError, setPasswordCheckError] = React.useState("");
  const NumberRegex = /^[0-9]{11}$/;
  const Passwordregex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  function numberCheck() {
    if (NumberRegex.test(number)) {
      setNumber(number);
    } else {
      setNumberError("전화번호를 다시 확인해주세요");
    }
  }
  function passwordCheck() {
    if (Passwordregex.test(password)) {
      setPassword(password);
    } else {
      setPasswordError(
        "비밀번호는 8자 이상 16자 이내, 특수문자가 들어가야 합니다!"
      );
    }
  }
  function send() {
    axios
      .post("url", {
        phoneNumber: number,
        password: password,
      })
      .then((res) => {
        localStorage.setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
      <Text style={styles.LoginText}>Create Account</Text>
      <TextInput
        onChange={numberCheck}
        required
        style={styles.input}
        placeholder="전화번호를 입력하세요..."
      ></TextInput>
      <Text>{NumberError}</Text>
      <TextInput
        maxLength={6}
        keyboardType="numeric"
        required
        style={styles.input}
        placeholder="인증번호 6자리를 입력하세요..."
      ></TextInput>
      <Text>{NumberCheckError}</Text>
      <TextInput
        onChange={passwordCheck}
        required
        style={styles.input}
        placeholder="사용하실 비밀번호를 입력하세요..."
      ></TextInput>
      <Text>{PasswordError}</Text>
      <TextInput
        required
        style={styles.input}
        placeholder="사용하실 비밀번호를 재입력하세요..."
      ></TextInput>
      <Text>{PasswordCheckError}</Text>
      <TouchableOpacity onPress={send}>
        <Text style={styles.Button}>Create Your Account!</Text>
      </TouchableOpacity>
    </View>
  );
}
