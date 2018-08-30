import { StyleSheet } from "react-native";

const BARHEIGHT = 56;

export default StyleSheet.create({
  navBar: {
    marginTop: 20,
    height: BARHEIGHT,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold"
  },
  redBar: {
    backgroundColor: "#ff0000",
    height: BARHEIGHT * 1.5
  }
});
