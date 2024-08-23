import { Image, View } from "react-native";
import styles from "../styles/styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.icon}
        resizeMode="contain"
        source={require("../assets/hamberger.png")}
      />
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/SSDlogo.png")}
      />
    </View>
  );
}
