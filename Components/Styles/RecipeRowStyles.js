import { StyleSheet, Platform } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";

export default StyleSheet.create({
  container: {
    marginHorizontal: Metrics.baseSpace,
    marginBottom: Metrics.baseSpace,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: Colors.whiteFull
  },
  imageContainer: {
    height: 128,
    backgroundColor: "green"
  },
  infoContainer: {
    paddingVertical: Metrics.smallSpace,
    paddingHorizontal: Metrics.baseSpace,
    justifyContent: "center",
    alignItems: "center",
    height: 88,
    backgroundColor: "red"
  }
});
