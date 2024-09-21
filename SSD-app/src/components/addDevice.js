import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AddDevice({ navigation }) {
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
      <TouchableOpacity onPress={() => navigation.navigate("registerDevice")}>
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
      </TouchableOpacity>
    </View>
  );
}
