import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from "react";
import styles from "../styles/styles";

export default function SignUp() {
  const [number, setNumber] = React.useState("");
  const [numberCheck, setNumberCheck] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  const [isNumber, setIsNumber] = React.useState(false);
  const [isNumberCheck, setIsNumberCheck] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordCheck, setIsPasswordCheck] = React.useState(false);

  const [isNumberError, setIsNumberError] = React.useState(false);
  const [isNumberCheckError, setIsNumberCheckError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);
  const [isPasswordCheckError, setIsPasswordCheckError] = React.useState(false);
  const NumberRegex = /^[0-9]{11}$/;
  const Passwordregex = /^[a-zA-Z0-9]{8,16}$/;
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
        style={styles.input}
        placeholder="전화번호를 입력하세요..."
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="인증번호 6자리를 입력하세요..."
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="사용하실 비밀번호를 입력하세요..."
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="사용하실 비밀번호를 재입력하세요..."
      ></TextInput>
      <TouchableOpacity>
        <Text style={styles.Button}>Create Your Account!</Text>
      </TouchableOpacity>
    </View>
  );
}
