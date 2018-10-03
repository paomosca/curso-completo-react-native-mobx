import { StyleSheet, Platform } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";

export default StyleSheet.create({
  categoryRow: {
    height: 56,
    backgroundColor: Colors.whiteFull,
    marginHorizontal: Metrics.baseSpace,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Metrics.smallSpace
  },
  categoryText: {
    ...Fonts.style.h3
  }
});
