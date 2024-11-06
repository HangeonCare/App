import { Image, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Graph() {
  const data = {
    labels: ["1시", "6시", "12시", "18시", "24시"],
    datasets: [
      {
        data: [1, 3, 6, 7, 7, 9],
      },
    ],
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
        style={{ fontWeight: 600, fontSize: 28, marginBottom: 40, flex: 0.05 }}
      >
        그래프
      </Text>
      <LineChart
        data={data}
        width={screenWidth - 40}
        height={300}
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          flex: 0.6,
        }}
      />
      <TouchableOpacity style={{ flex: 0.3 }}>
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
          이전
        </Text>
      </TouchableOpacity>
    </View>
  );
}
