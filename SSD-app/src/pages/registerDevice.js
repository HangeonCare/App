import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function RegisterDevice({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 60,
      }}
    >
      <Image
        resizeMode="contain"
        style={{ width: 100, height: 40 }}
        source={require("../assets/SSDlogo.png")}
      ></Image>
      <Text style={styles.LoginText}>기기 연결</Text>
      <TextInput
        placeholder="시리얼 번호를 입력하세요..."
        style={styles.input}
      ></TextInput>
      <View style={{ display: "flex", gap: 12 }}>
        <TouchableOpacity>
          <Text style={styles.Button}>연결하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>돌아가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
