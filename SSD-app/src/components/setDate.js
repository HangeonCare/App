import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";

const DurationPicker = ({ onClose }) => {
  const navigation = useNavigation();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  const dayOptions = Array.from({ length: 30 }, (_, i) => ({
    label: `${i}일`,
    value: i,
  }));
  const hourOptions = Array.from({ length: 23 }, (_, i) => ({
    label: `${i + 1}시간`,
    value: i + 1,
  }));

  function Save() {
    alert("저장되었습니다.");
    onClose();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        marginTop: 80,
      }}
    >
      <View style={{ flex: 0.3 }}>
        <Image
          style={{ width: 100, height: 40 }}
          source={require("../assets/SSDlogo.png")}
        />
        <Text style={{ color: "#555555", marginTop: 15 }}>
          기기의 기간을 설정할 수 있어요
        </Text>
      </View>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        기간 설정
      </Text>
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
          placeholder={{ label: "시간 선택", value: 0 }}
          style={pickerSelectStyles}
        />
      </View>

      <Text style={styles.result}>
        선택된 기간: {days}일 {hours}시간
      </Text>
      <View>
        <TouchableOpacity
          style={{
            paddingVertical: 18,
            paddingHorizontal: 140,
            borderRadius: 12,
            backgroundColor: days === 0 && hours === 0 ? "#E1E1E1" : "#EB3678",
          }}
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
        <TouchableOpacity onPress={onClose}>
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
            닫기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: { display: "flex", flexDirection: "row", marginBottom: 100 },
  result: { fontSize: 16, marginTop: 20 },
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
    width: 175,
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
