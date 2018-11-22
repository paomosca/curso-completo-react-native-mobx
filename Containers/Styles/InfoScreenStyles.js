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
  title: {
    ...Fonts.family.recipeNameCard,
    fontWeight: "bold"
  },
  imageContainer: {},
  image: {
    height: 200
  },
  infoContainer: {
    padding: Metrics.baseSpace
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
  description: {
    fontFamily: Fonts.family.base,
    color: Colors.darkGrey,
    lineHeight: 24,
    fontSize: 14
  },
  button: {
    marginTop: Metrics.baseSpace,
    paddingHorizontal: Metrics.baseSpace,
    height: Metrics.buttonSize,
    backgroundColor: Colors.lightOrange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Metrics.buttonRadius
  },
  buttonText: {
    fontFamily: Fonts.family.bold,
    color: Colors.whiteFull,
    lineHeight: 24,
    fontSize: 18
  }
});
