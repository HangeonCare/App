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

export default function Device({ devicedata }) {
  const [toggle, setToggle] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    const getID = async () => {
      try {
        const Id = await AsyncStorage.getItem("id");
        if (Id !== null) {
          setId(Id);
          console.log(id);
        } else {
          console.log("ID가 존재하지 않습니다.");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getID();
  }, []);
  const imageSource = devicedata.action
    ? require("../assets/connect.png")
    : require("../assets/dead.png");

  const deleteData = async () => {
    try {
      const res = await axios.delete(
        `${url}/users/${id}/devices/${devicedata.serialNumber}`
      );
      Alert.alert("삭제되었습니다.");
      window.location.reload();
      handleCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

  const confirmDelete = () => {
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
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCloseModal = () => {
    setToggle(false);
  };

  return (
    <View key={devicedata.serialNumber} style={styles.postContainer}>
      <Image
        source={imageSource}
        resizeMode="contain"
        style={{ width: 24, height: 24, marginRight: 20 }}
      />
      <View style={{ marginLeft: -140 }}>
        <Text style={styles.user}>{devicedata.serialNumber}</Text>
        <Text style={styles.time}>
          {devicedata.action
            ? "최근에 센서가 감지되었습니다"
            : "설정한 기간이 지났습니다"}
        </Text>
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

                  <TouchableOpacity onPress={confirmDelete}>
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
