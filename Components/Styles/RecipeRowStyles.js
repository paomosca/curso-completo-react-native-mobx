import { StyleSheet, Platform } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";

export default StyleSheet.create({
  container: {
    marginHorizontal: Metrics.baseSpace,
    marginBottom: Metrics.baseSpace,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: Colors.whiteFull,
    overflow: "hidden",
    borderRadius: Metrics.borderRadius
  },
  imageContainer: {
    height: 128
  },
  infoContainer: {
    paddingVertical: Metrics.smallSpace,
    paddingHorizontal: Metrics.baseSpace,
    justifyContent: "center",
    alignItems: "stretch"
  },
  recipeImage: {
    flex: 1
  },
  properties: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  cell: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: Metrics.smallSpace,
    flexDirection: "row"
  },
  cellIcon: {
    fontSize: Metrics.icons.small,
    color: Colors.mediumGrey,
    marginRight: Metrics.smallSpace
  },
  cellText: {
    fontFamily: Fonts.family.base,
    fontSize: 13,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.5,
    color: Colors.mediumGrey
  },
  title: {
    fontFamily: Fonts.family.base,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: "left",
    color: Colors.black
  },
  category: {
    fontFamily: Fonts.family.base,
    fontSize: 10,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 1,
    color: Colors.darkGrey,
    textAlign: "left"
  }
});
