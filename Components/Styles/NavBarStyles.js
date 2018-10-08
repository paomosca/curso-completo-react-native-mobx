import { StyleSheet } from "react-native";

import { Metrics, Colors, Fonts } from "../../Theme/";

const BARHEIGHT = 56;

export default StyleSheet.create({
  navBar: {
    paddingTop: Metrics.statusBarHeight,
    height: Metrics.navBarHeight,
    backgroundColor: Colors.whiteFull,
    backgroundColor: Colors.mainBackground,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  alternate: {
    color: Colors.whiteFull
  },
  transparent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    zIndex: 10
  },
  title: {
    ...Fonts.style.h3,
    color: Colors.black
  },
  favIco: {},
  leftContainer: {
    width: Metrics.buttonSize,
    alignItems: "center",
    justifyContent: "center"
  },
  rightContainer: {
    width: Metrics.buttonSize,
    alignItems: "center",
    justifyContent: "center"
  },
  titleWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  favorite: {
    color: Colors.darkOrange
  }
});
