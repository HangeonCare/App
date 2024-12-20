import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "start",
    paddingHorizontal: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  postContainer: {
    gap: 160,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: "#B7B7B7",
    height: 80,
    marginBottom: 20,
    minWidth: 350,
    maxWidth: 350,
    borderRadius: 10,
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
  user: {
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 0,
  },
  time: {
    color: "#000000",
    opacity: 0.5,
    fontSize: 12,
    fontWeight: "700",
  },
  option: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    padding: 10,
    textAlign: "center",
    height: 50,
  },
  popup: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderTopColor: "#ccc",
    borderLeftColor: "#ccc",
    borderRightColor: "#ccc",
    textAlign: "left",
  },
  sideBarText: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    width: 320,
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "black",
    fontWeight: "400",
    fontSize: 16,
    marginBottom: 0,
  },
  LoginText: {
    fontSize: 28,
    fontWeight: "600",
    marginVertical: 40,
  },
  Button: {
    paddingVertical: 18,
    paddingHorizontal: 140,
    borderRadius: 12,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#B7B7B7",
    fontSize: 16,
    fontWeight: "600",
  },
  Button2: {
    paddingVertical: 18,
    paddingHorizontal: 140,
    borderRadius: 12,
    backgroundColor: "#E1E1E1",
  },
  ButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
