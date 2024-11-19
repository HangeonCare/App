import axios from "axios";
import { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const url = "https://port-0-bes-m1ed5avw1d3364c3.sel4.cloudtype.app";

export default function Graph() {
  const route = useRoute();
  const { getDeviceData } = route.params;
  const [average, setAverage] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchIdAndDeviceData = async () => {
      try {
        const storedId = await AsyncStorage.getItem("id");
        if (storedId) {
          await getData(storedId);
        }
      } catch (error) {
        console.log(error);
        Alert.alert("ID를 불러오는 데 실패했습니다.");
      }
    };

    fetchIdAndDeviceData();
  }, []);

  function calculate(data) {
    const averages = new Array(4).fill(0);

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 4; j++) {
        averages[j] += data[i][j];
      }
    }

    for (let j = 0; j < 4; j++) {
      averages[j] = averages[j] / 7;
    }

    setAverage(averages);
  }

  function getData(id) {
    axios
      .get(`${url}/users/${id}/devices/${getDeviceData}/ai`)
      .then((res) => {
        calculate(res.data.eventCounts);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const data = {
    labels: ["1시~6시", "6시~12시", "12시~18시", "18시~24시"],
    datasets: [{ data: average }],
  };

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
      <View style={{ flex: 0.2 }}>
        <Image
          style={{ width: 100, height: 40, marginBottom: 15, flex: 0.4 }}
          source={require("../assets/SSDlogo.png")}
          resizeMode="contain"
        />
        <Text style={{ color: "#555555" }}>
          AI가 분석한 생활패턴 그래프를 볼 수 있어요
        </Text>
      </View>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 28,
          marginBottom: 40,
          flex: 0.05,
        }}
      >
        그래프
      </Text>
      <LineChart
        data={data}
        width={screenWidth - 20}
        height={300}
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(235, 54, 120, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: { r: "0" },
        }}
        style={{ marginVertical: 8, borderRadius: 10, flex: 0.6 }}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ flex: 0.3 }}
      >
        <Text
          style={{
            paddingVertical: 18,
            paddingHorizontal: 140,
            borderRadius: 12,
            textAlign: "center",
            borderWidth: 1,
            borderColor: "#B7B7B7",
            fontSize: 16,
            fontWeight: "700",
            color: "black",
          }}
        >
          닫기
        </Text>
      </TouchableOpacity>
    </View>
  );
}
