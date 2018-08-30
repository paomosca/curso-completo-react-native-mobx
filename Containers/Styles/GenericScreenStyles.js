import { StyleSheet } from "react-native";

import { Metrics, Colors } from "../../Theme/";

const BARHEIGHT = 56;

export default StyleSheet.create({
  navBar: {
    marginTop: Metrics.statusBarHeight,
    height: Metrics.navBarHeight,
    backgroundColor: Colors.whiteFull,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold"
  },
  redBar: {
    backgroundColor: Colors.redFull,
    height: BARHEIGHT * 1.5
  }
});
