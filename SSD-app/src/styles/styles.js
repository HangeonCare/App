import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  icon: {
    width: 24,
    height: 24,
  },
  postContainer: {
    gap: 90,
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontWeight: "700",
    fontSize: 32,
    marginRight: 260,
    marginBottom: 20,
  },
  header: {
    marginVertical: 46,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 220,
  },
  logo: {
    width: 70,
    height: 28,
  },
});
