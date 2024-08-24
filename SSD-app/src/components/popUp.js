import { View, Image, Text } from "react-native";
import styles from "../styles/styles";

export default function PopUp() {
  return (
    <View style={styles.popup}>
      <View style={styles.option}>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={require("../assets/information.png")}
        ></Image>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          정보
        </Text>
      </View>
      <View style={styles.option}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../assets/date.png")}
        ></Image>
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
    </View>
  );
}
