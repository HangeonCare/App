import React, { useState } from "react";
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
import PopUp from "./popUp";
import DurationPicker from "./setDate";

export default function Device({ devicedata }) {
  const [toggle, setToggle] = useState(false);
  const [device, setDevice] = useState({});
  useEffect(() => {
    setDevice(devicedata);
    PopUp(device.serialNumber);
    DurationPicker(device.serialNumber);
  }, []);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCloseModal = () => {
    setToggle(false);
  };

  return (
    <View key={device.serialNumber}>
      <View style={styles.postContainer}>
        <Image
          source={require("../assets/connect.png")}
          resizeMode="contain"
          style={{ width: 34, height: 34 }}
        />
        <View style={{ marginLeft: -140 }}>
          <Text style={styles.user}>{device.serialNumber}</Text>
          <Text style={styles.time}>{device.period}</Text>
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
                  <PopUp />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
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
