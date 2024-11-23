import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "../styles/styles";
import DurationPicker from "./setDate";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";

export default function Device({ devicedata }) {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState(null);

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

  const imageSource = devicedata.action
    ? require("../assets/connect.png")
    : require("../assets/dead.png");

  const deleteData = async () => {
    try {
      await axios.delete(
        `${url}/users/${id}/devices/${devicedata.serialNumber}`
      );
      Alert.alert("삭제되었습니다.");
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
        { text: "취소", style: "cancel" },
        { text: "삭제", onPress: deleteData, style: "destructive" },
      ],
      { cancelable: true }
    );
  };

  const handleCloseModal = () => {
    setToggle(false);
  };

  const onClick = () => {
    navigation.navigate("Graph", { getDeviceData: devicedata.serialNumber });
  };

  return (
    <View key={devicedata.serialNumber} style={styles.postContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={imageSource}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
        <View>
          <Text style={styles.user}>{devicedata.serialNumber}</Text>
          <Text style={styles.time}>
            {devicedata.action
              ? "최근 센서가 감지됐습니다"
              : "설정한 기간이 지났습니다"}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setToggle(true);
        }}
      >
        <Image
          source={require("../assets/menu.png")}
          resizeMode="contain"
          style={{
            width: 24,
            height: 24,
            position: "absolute",
            right: 10,
            top: -10,
          }}
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
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("DurationPicker", {
                        serialNumber: devicedata.serialNumber,
                      });
                    }}
                  >
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
                  <TouchableOpacity onPress={onClick}>
                    <View style={styles.option}>
                      <Image
                        resizeMode="contain"
                        style={styles.icon}
                        source={require("../assets/heartBeat.png")}
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          color: "black",
                        }}
                      >
                        생활패턴 보기
                      </Text>
                    </View>
                  </TouchableOpacity>
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
