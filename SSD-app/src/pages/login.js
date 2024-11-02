import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export function Login({ navigation }) {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function send() {
    axios
      .post(
        "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app/users/login",
        {
          phoneNumber: number,
          password: password,
        }
      )
      .then((res) => {
        AsyncStorage.setItem("id", res.data.id);
        navigation.navigate("Main");
        setNumber("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setNumber("");
        setPassword("");
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View style={{ marginTop: 130, flex: 0.8, gap: 15 }}>
          <Image
            style={{ width: 100, height: 40 }}
            source={require("../assets/SSDlogo.png")}
          />
          <Text style={{ color: "#555555" }}>
            로그인 후 기기를 등록 할 수 있어요
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ fontWeight: 600, fontSize: 28, marginBottom: 40 }}>
            로그인
          </Text>
          <View>
            <TextInput
              keyboardType="numeric"
              placeholder="전화번호를 숫자만 입력해주세요"
              style={{
                width: "100%",
                height: 50,
                borderColor: "gray",
                borderBottomWidth: 1,
                marginBottom: 20,
                paddingHorizontal: 10,
                marginBottom: 0,
              }}
              onChangeText={setNumber}
              value={number}
            />
            {error && (
              <Text style={{ color: "red" }}>전화번호를 입력해주세요</Text>
            )}
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              placeholder="비밀번호를 입력하세요"
              style={{
                width: "100%",
                height: 50,
                borderColor: "gray",
                borderBottomWidth: 1,
                marginBottom: 20,
                paddingHorizontal: 10,
                marginBottom: 0,
              }}
              onChangeText={setPassword}
              value={password}
            />
            {error && (
              <Text style={{ color: "red" }}>비밀번호를 입력해주세요</Text>
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity
            disabled={password === "" && number === ""}
            onPress={send}
            style={{
              paddingVertical: 18,
              paddingHorizontal: 140,
              borderRadius: 12,
              backgroundColor:
                password === "" && number === "" ? "#E1E1E1" : "#EB3678",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: password === "" && number === "" ? "black" : "white",
              }}
            >
              로그인
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{
                paddingVertical: 18,
                paddingHorizontal: 140,
                borderRadius: 12,
                textAlign: "center",
                borderWidth: 1,
                borderColor: "#B7B7B7",
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 70,
                marginTop: 20,
              }}
            >
              회원가입
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
