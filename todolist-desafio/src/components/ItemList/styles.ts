import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    borderRadius: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 8,
    paddingLeft: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginLeft: 24,
    marginRight: 24,
  },
  text: {
    color: "#F2F2F2",
    fontSize: 14,
    flex: 1,
  },
  image: {
    width: 32,
    height: 32,
  },
  checkbox: {
    borderRadius: 1000,
    marginRight: 8,
    borderColor: "#4EA8DE",
  },
  teste: {
    textDecorationLine: "line-through"
  },
  removeLine: {
    textDecorationLine: "none"
  }
});