import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import styles from "../styles/styles";
import DurationPicker from "./setDate";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";

function DeleteData() {
  Alert.alert(
    "삭제 확인",
    "정말 삭제하시겠습니까?",
    [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "삭제",
        onPress: deleteData,
        style: "destructive",
      },
    ],
    { cancelable: true }
  );
}
async function deleteData() {
  try {
    const res = await axios.delete(`${url}/users/3/devices/ABC123`);
    alert("삭제되었습니다.");
    onClose();
  } catch (err) {
    console.log(err);
    alert("삭제에 실패했습니다.");
  }
}
export default function Device({ devicedata }) {
  const [toggle, setToggle] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  useEffect(() => {
    const fetchIdAndDeviceData = async () => {
      try {
        const storedId = await AsyncStorage.getItem("id");
        if (storedId) {
          await deleteData(storedId);
        }
      } catch (error) {
        console.log(error);
        Alert.alert("ID를 불러오는 데 실패했습니다.");
      }
    };

    fetchIdAndDeviceData();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCloseModal = () => {
    setToggle(false);
  };

  return (
    <View key={devicedata.serialNumber} style={styles.postContainer}>
      <Image
        source={require("../assets/connect.png")}
        resizeMode="contain"
        style={{ width: 34, height: 34 }}
      />
      <View style={{ marginLeft: -140 }}>
        <Text style={styles.user}>{devicedata.serialNumber}</Text>
        <Text style={styles.time}>{devicedata.period}</Text>
      </View>
      <TouchableOpacity onPress={handleToggle}>
        <Image
          source={require("../assets/menu.png")}
          resizeMode="contain"
          style={styles.icon}
        />
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={toggle}
        animationType="none"
        onRequestClose={handleCloseModal}
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={modalStyles.modalBackground}>
            <TouchableWithoutFeedback>
              <View style={modalStyles.modalContainer}>
                <View style={styles.popup}>
                  <View style={styles.option}>
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>
                      {devicedata.serialNumber}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                    <View style={styles.option}>
                      <Image
                        resizeMode="contain"
                        style={styles.icon}
                        source={require("../assets/date.png")}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          color: "#180161",
                        }}
                      >
                        날짜 수정
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={DeleteData}>
                    <View style={styles.option}>
                      <Image
                        resizeMode="contain"
                        style={styles.icon}
                        source={require("../assets/delete.png")}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          color: "#ff0000",
                        }}
                      >
                        삭제
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <Modal visible={isDatePickerVisible} animationType="slide">
                    <DurationPicker
                      onClose={() => setDatePickerVisible(false)}
                    />
                  </Modal>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const modalStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
});
