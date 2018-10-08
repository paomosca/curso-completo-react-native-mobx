import { StyleSheet } from "react-native";

import { Metrics, Colors, Fonts } from "../../Theme/";

export default StyleSheet.create({
  container: {
    height: Metrics.tabBarHeight,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: Colors.whiteFull
  },
  tab: {
    flex: 1,
    height: Metrics.tabBarHeight,
    padding: Metrics.smallSpace,
    justifyContent: "center",
    alignItems: "center"
  },
  tabIcon: {
    color: Colors.mediumGrey,
    justifyContent: "center",
    alignItems: "center",
    fontSize: Metrics.icons.tab
  },
  selectedIcon: {
    color: Colors.lightOrange
  },
  tabLine: {
    position: "absolute",
    backgroundColor: Colors.lightOrange,
    height: 4,
    left: Metrics.baseSpace,
    right: Metrics.baseSpace,
    bottom: 0
  }
});
