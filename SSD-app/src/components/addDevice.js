import { View, Text } from "react-native";

export default function AddDevice() {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "600",
          color: "#00000080",
          opacity: 0.5,
          fontSize: 20,
          marginBottom: 3,
        }}
      >
        아직 기기가 없나요?
      </Text>
      <Text
        style={{
          textAlign: "center",
          opacity: 0.5,
          color: "#4F178780",
          textDecorationLine: "underline",
          fontWeight: "700",
          fontSize: 16,
        }}
      >
        + 기기 추가하기
      </Text>
    </View>
  );
}
