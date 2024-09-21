import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Modal } from "react-native";
import styles from "../styles/styles";
import DurationPicker from "./setDate";
import axios from "axios";

const url = "";

export default function PopUp({ serialNumber, onClose }) {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  function DeleteData() {
    let confirmDelete = confirm("정말 삭제하시겠습니까?");
    if (confirmDelete) {
      axios
        .delete(`${url}/users/${id}/devices/${serialNumber}`, {
          serialNumber: serialNumber,
        })
        .then((res) => {
          alert("삭제되었습니다.");
          onClose();
        })
        .catch((err) => {
          console.log(err);
          alert("삭제에 실패했습니다.");
        });
    }
  }

  return (
    <View style={styles.popup}>
      <View style={styles.option}>
        <Text style={{ fontSize: 16, fontWeight: "700" }}>옵션</Text>
      </View>

      <TouchableOpacity>
        <View style={styles.option}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require("../assets/information.png")}
          />
          <Text style={{ fontSize: 16, fontWeight: "700" }}>정보</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
        <View style={styles.option}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require("../assets/date.png")}
          />
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#180161" }}>
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
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#ff0000" }}>
            삭제
          </Text>
        </View>
      </TouchableOpacity>

      <Modal visible={isDatePickerVisible} animationType="slide">
        <DurationPicker onClose={() => setDatePickerVisible(false)} />
      </Modal>
    </View>
  );
}
