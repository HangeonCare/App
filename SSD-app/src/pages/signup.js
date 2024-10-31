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
import styles from "../styles/styles";

const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";

export function SignUp({ navigation }) {
  const [number, setNumber] = useState("");
  const [sertificationNumber, setSertificationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [numberError, setNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [certificationNumberError, setCertificationNumberError] = useState("");

  const [numberTouched, setNumberTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordCheckTouched, setPasswordCheckTouched] = useState(false);
  const [certificationNumberTouched, setCertificationNumberTouched] =
    useState(false);
  const [isPhoneButtonDisabled, setIsPhoneButtonDisabled] = useState(false);
  const [isCertificationNumberValid, setIsCertificationNumberValid] =
    useState(false);

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

  function validateCertificationNumber() {
    setCertificationNumberTouched(true);
    if (sertificationNumber.length !== 6) {
      setCertificationNumberError("인증번호는 6자리여야 합니다.");
      setIsCertificationNumberValid(false);
    } else {
      setCertificationNumberError("");
      setIsCertificationNumberValid(true);
    }
  }

  function send() {
    axios
      .post(`${url}/users/signup`, {
        phoneNumber: number,
        verificationCode: sertificationNumber,
        password: password,
        confirmPassword: passwordCheck,
      })
      .then((res) => {
        navigation.navigate("login");
        alert("회원가입이 완료되었습니다.");
      })
      .catch((err) => {
        console.log(err);
        alert("조건에 맞게 입력해주세요");
      });
  }

  function sendPhone() {
    if (number.trim() === "") {
      alert("전화번호를 입력해주세요.");
      return;
    }

    axios
      .post(`${url}/users/send-code`, {
        phoneNumber: number,
      })
      .then((res) => {
        alert("인증번호가 전송되었습니다. 10분 간격으로 재전송 가능합니다.");
        setIsPhoneButtonDisabled(true);
        setTimeout(() => {
          setIsPhoneButtonDisabled(false);
        }, 10 * 60 * 1000);
      })
      .catch((err) => {
        console.log(err);
        alert("전송에 실패했습니다.");
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "start",
          gap: 20,
          padding: 20,
          paddingTop: 100,
          paddingBottom: 40,
        }}
      >
        <View>
          <Image
            resizeMode="contain"
            style={{ width: 100, height: 40, marginBottom: 15 }}
            source={require("../assets/SSDlogo.png")}
          />
          <Text style={{ color: "#555555" }}>
            회원가입 후 서비스를 누려보세요
          </Text>
        </View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "600",
            marginTop: 50,
            marginBottom: 25,
          }}
        >
          회원가입
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <TextInput
              onChangeText={(text) => setNumber(text)}
              onBlur={() => {
                setNumberTouched(true);
                validatePhoneNumber();
              }}
              style={{
                width: 240,
                height: 40,
                padding: 10,
                borderBottomWidth: 1,
                borderColor: "black",
                fontWeight: "400",
                fontSize: 16,
              }}
              placeholder="전화번호를 숫자만 입력해주세요"
            />
            {numberTouched && (
              <Text style={{ color: "red" }}>{numberError}</Text>
            )}
          </View>
          <TouchableOpacity
            onPress={sendPhone}
            disabled={isPhoneButtonDisabled || number.trim() === ""}
          >
            <Text
              style={{
                fontSize: 13,
                borderWidth: 1,
                borderRadius: 10,
                padding: 15,
                opacity: isPhoneButtonDisabled ? 0.5 : 1,
                fontWeight: "600",
                borderColor: "#B7B7B7",
              }}
            >
              {isPhoneButtonDisabled ? "전송중" : "인증번호"}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            maxLength={6}
            keyboardType="numeric"
            style={styles.input}
            value={sertificationNumber}
            onChangeText={(text) => setSertificationNumber(text)}
            onBlur={validateCertificationNumber}
            placeholder="인증번호 6자리를 입력하세요..."
          />
          {certificationNumberTouched && (
            <Text style={{ color: "red" }}>{certificationNumberError}</Text>
          )}
        </View>

        <View>
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
        </View>

        <View>
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
        </View>

        <View style={{ display: "flex", gap: "20", marginTop: 30 }}>
          <TouchableOpacity
            onPress={send}
            style={{
              paddingVertical: 18,
              paddingHorizontal: 140,
              borderRadius: 12,
              backgroundColor:
                numberError === "" &&
                passwordError === "" &&
                certificationNumberError === "" &&
                passwordCheckError === ""
                  ? "#E1E1E1"
                  : "#EB3678",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color:
                  numberError === "" &&
                  passwordError === "" &&
                  certificationNumberError === "" &&
                  passwordCheckError === ""
                    ? "black"
                    : "white",
              }}
            >
              회원가입
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                paddingVertical: 18,
                paddingHorizontal: 150,
                borderRadius: 12,
                textAlign: "center",
                borderWidth: 1,
                borderColor: "#B7B7B7",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              로그인
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
