import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AddDevice({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("registerDevice")}>
        <Text
          style={{
            paddingVertical: 15,
            paddingHorizontal: 130,
            borderRadius: 12,
            textAlign: "center",
            borderWidth: 1,
            borderColor: "#B7B7B7",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          + 기기 추가
        </Text>
      </TouchableOpacity>
    </View>
  );
}
