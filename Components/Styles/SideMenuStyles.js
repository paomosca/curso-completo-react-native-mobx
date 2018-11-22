import { StyleSheet } from "react-native";

import { Metrics, Colors, Fonts } from "../../Theme/";

const BARHEIGHT = 56;

export default StyleSheet.create({
  menu: {
    paddingTop: Metrics.navBarHeight,
    alignItems: "stretch",
    justifyContent: "center"
  },
  row: {
    height: Metrics.buttonSize,
    paddingHorizontal: Metrics.baseSpace,
    paddingVertical: Metrics.smallSpace,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightOrange
  },
  title: {
    ...Fonts.style.h3
  }
});
