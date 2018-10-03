import { StyleSheet } from "react-native";

import { Metrics, AppStyles, Colors, Fonts } from "../../Theme/";

const BARHEIGHT = 56;

export default StyleSheet.create({
  ...AppStyles.screen,
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
  redBar: {
    backgroundColor: Colors.redFull,
    height: BARHEIGHT * 1.5
  }
});
