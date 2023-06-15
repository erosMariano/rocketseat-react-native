import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  name: {
    color: "#fff",
    flex: 1,
    paddingLeft: 16,
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    lineHeight: 56,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#e23c44",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
