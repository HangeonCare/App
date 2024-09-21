import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const DurationPicker = ({ onClose }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0); // 기본 값 0

  const dayOptions = Array.from({ length: 30 }, (_, i) => ({
    label: `${i}일`,
    value: i,
  }));
  const hourOptions = Array.from({ length: 23 }, (_, i) => ({
    label: `${i + 1}시간`, // 1시간부터 시작
    value: i + 1,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>기간 선택</Text>

      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setDays(value)}
          items={dayOptions}
          placeholder={{ label: "일 선택", value: 0 }}
          style={pickerSelectStyles}
        />

        <RNPickerSelect
          onValueChange={(value) => setHours(value)}
          items={hourOptions}
          placeholder={{ label: "시간 선택", value: 0 }} // 시간 기본값 0 설정
          style={pickerSelectStyles}
        />
      </View>

      <Text style={styles.result}>
        선택된 기간: {days}일 {hours}시간
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 30,
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>닫기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.closeButton}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  label: { paddingTop: 300, fontSize: 18, marginBottom: 20 },
  pickerContainer: { display: "flex", flexDirection: "row", marginBottom: 100 },
  result: { fontSize: 16, marginTop: 20 },
  closeButton: { marginTop: 20, color: "blue", textAlign: "center" },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
});

export default DurationPicker;
