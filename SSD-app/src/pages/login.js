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
        .post("url", {
          phoneNumber: number,
          password: password,
        })
        .then((res) => {
          localStorage.setItem("userData", JSON.stringify(res.data));
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
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
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
          placeholder="전화번호를 입력하세요..."
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
        {numberTouched && <Text style={{ color: "red" }}>{numberError}</Text>}

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

        <TouchableOpacity onPress={send}>
          <Text style={styles.Button}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.Button}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
