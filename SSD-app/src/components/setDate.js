import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DurationPicker = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [userId, setId] = useState(null);
  const [nowTime, setNowTime] = useState(null);
  const serialNumber = route.params.serialNumber;

  useEffect(() => {
    const getID = async () => {
      try {
        const Id = await AsyncStorage.getItem("id");
        if (Id !== null) {
          setId(Id);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getID();
  }, []);

  useEffect(() => {
    if (userId) {
      getDay();
    }
  }, [userId]);

  function getDay() {
    axios
      .get(
        `https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app/users/${userId}/devices/${serialNumber}/period`
      )
      .then((res) => {
        setNowTime(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function Save() {
    axios
      .put(
        `https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app/users/${userId}/devices/${serialNumber}/period`,
        {
          day: Number(days),
          hour: Number(hours),
        }
      )
      .then(() => {
        alert("기간이 설정되었습니다.");
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../assets/SSDlogo.png")}
          />
          <Text style={styles.description}>기기의 기간을 설정할 수 있어요</Text>
        </View>
        <Text style={styles.title}>기간 설정</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={2}
              placeholder="일 입력"
              value={days === 0 ? "" : String(days)}
              onChangeText={(value) =>
                setDays(
                  value === "" ? 0 : parseInt(value.replace(/[^0-9]/g, ""), 10)
                )
              }
            />
            <Text style={styles.label}>일</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={2}
              placeholder="시간 입력"
              value={hours === 0 ? "" : String(hours)}
              onChangeText={(value) => setHours(value)}
            />
            <Text style={styles.label}>시간</Text>
          </View>
        </View>
        <View>
          <Text style={styles.result}>
            선택된 기간: {days}일 {hours}시간
          </Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>
            현재 설정된 기간: {nowTime?.day || 0}일 {nowTime?.hour || 0}시간
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.saveButton,
              {
                backgroundColor:
                  days === 0 && hours === 0 ? "#E1E1E1" : "#EB3678",
              },
            ]}
            onPress={Save}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: days === 0 && hours === 0 ? "black" : "white",
              }}
            >
              저장
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.closeButton}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    marginTop: 80,
  },
  header: { flex: 0.3 },
  logo: { width: 100, height: 40 },
  description: { color: "#555555", marginTop: 15 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 100,
    justifyContent: "space-between",
  },
  inputWrapper: { flexDirection: "row", alignItems: "center" },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontSize: 16,
    width: 130,
    marginRight: 10,
    textAlign: "center",
  },
  label: { fontSize: 16 },
  result: { fontSize: 16, marginTop: 20 },
  saveButton: {
    paddingVertical: 18,
    paddingHorizontal: 140,
    borderRadius: 12,
  },
  closeButton: {
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
  },
});

export default DurationPicker;
