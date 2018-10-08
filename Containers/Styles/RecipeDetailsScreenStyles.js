import { StyleSheet } from "react-native";

import { Metrics, AppStyles, Colors, Fonts } from "../../Theme/";

export default StyleSheet.create({
  ...AppStyles.screen,
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: Colors.mainBackground
  },
  navBar: {
    marginTop: Metrics.statusBarHeight,
    height: Metrics.navBarHeight,
    backgroundColor: Colors.whiteFull,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    ...Fonts.family.recipeNameCard,
    fontWeight: "bold"
  },
  imageContainer: {},
  recipeImage: {
    height: 192
  },
  darkener: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 5,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  ingredientsBox: {
    height: 200,
    backgroundColor: "violet"
  },
  instructionBox: {
    height: 200,
    backgroundColor: "pink"
  },
  title: {
    fontFamily: Fonts.family.base,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: "center",
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
    textAlign: "center"
  },
  properties: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  cell: {
    flex: 1,
    justifyContent: "center",
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
  infoBox: {
    paddingVertical: Metrics.smallSpace,
    paddingHorizontal: Metrics.baseSpace,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "stretch"
  },
  header: {
    fontFamily: Fonts.family.bold,
    lineHeight: 24,
    textAlign: "center",
    color: Colors.black,
    fontSize: 14
  },
  description: {
    fontFamily: Fonts.family.base,
    color: Colors.darkGrey,
    lineHeight: 24,
    fontSize: 14
  }
});
