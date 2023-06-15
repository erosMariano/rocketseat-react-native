import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16
  },
  text: {
    fontSize: 24
  },
  input: {
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    height:  56,
    color: "#fff",
    paddingLeft: 16,
    fontSize: 16,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,

  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
    marginTop: 24,
    marginBottom: 32,
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center"
  }
});
