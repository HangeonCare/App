import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import axios from "axios";

export default function SignUp({ navigation }) {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [numberError, setNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const [numberTouched, setNumberTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordCheckTouched, setPasswordCheckTouched] = useState(false);

  const NumberRegex = /^[0-9]{11}$/;
  const PasswordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  function validatePhoneNumber() {
    if (!NumberRegex.test(number)) {
      setNumberError("전화번호를 다시 확인해주세요");
    } else {
      setNumberError("");
    }
  }

  function validatePassword() {
    if (!PasswordRegex.test(password)) {
      setPasswordError(
        "비밀번호는 8자 이상 16자 이내, 특수문자가 들어가야 합니다!"
      );
    } else {
      setPasswordError("");
    }
  }

  function checkPasswordMatch() {
    if (password !== passwordCheck) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckError("");
    }
  }

  function send() {
    axios
      .post("url", {
        phoneNumber: number,
        password: password,
      })
      .then((res) => {
        navigation.navigate("Login");
        console.log(res);
        alert("회원가입이 완료되었습니다.");
      })
      .catch((err) => {
        console.log(err);
        alert("조건에 맞게 입력해주세요");
      });
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
        <Text style={styles.LoginText}>Create Account</Text>

        <TextInput
          onChangeText={(text) => setNumber(text)}
          onBlur={() => {
            setNumberTouched(true);
            validatePhoneNumber();
          }}
          style={styles.input}
          placeholder="전화번호를 입력하세요..."
        />
        {numberTouched && <Text style={{ color: "red" }}>{numberError}</Text>}

        <TextInput
          maxLength={6}
          keyboardType="numeric"
          style={styles.input}
          placeholder="인증번호 6자리를 입력하세요..."
        />

        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onBlur={() => {
            setPasswordTouched(true);
            validatePassword();
          }}
          style={styles.input}
          placeholder="사용하실 비밀번호를 입력하세요..."
        />
        {passwordTouched && (
          <Text style={{ color: "red" }}>{passwordError}</Text>
        )}

        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setPasswordCheck(text)}
          onBlur={() => {
            setPasswordCheckTouched(true);
            checkPasswordMatch();
          }}
          style={styles.input}
          placeholder="사용하실 비밀번호를 재입력하세요..."
        />
        {passwordCheckTouched && (
          <Text style={{ color: "red" }}>{passwordCheckError}</Text>
        )}

        <TouchableOpacity onPress={send}>
          <Text style={styles.Button}>Create Your Account!</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
