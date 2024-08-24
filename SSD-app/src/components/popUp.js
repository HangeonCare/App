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
        <Text>정보</Text>
      </View>
      <View style={styles.option}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../assets/date.png")}
        ></Image>
        <Text>날짜 수정</Text>
      </View>
      <View style={styles.option}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../assets/delete.png")}
        />
        <Text>삭제</Text>
      </View>
    </View>
  );
}
