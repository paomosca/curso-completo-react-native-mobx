import React from "react";

import { View, Text } from "react-native";

import { createIconSetFromFontello } from "react-native-vector-icons";
import config from "../Theme/Fonts/config";

const CustomIcon = createIconSetFromFontello(config);

import styles from "./Styles/NavBarStyles";

class NavBar extends React.Component {
  backButton = () => {
    const { leftButton } = this.props;
    if (leftButton) {
      return <CustomIcon name="left" style={styles.favIco} />;
    }
  };

  rightButton = () => {
    const { rightButton, favorite } = this.props;
    if (rightButton) {
      if (favorite) {
        return (
          <CustomIcon
            name="favorites"
            style={[styles.barButtonIco, styles.favorite]}
          />
        );
      } else {
        return <CustomIcon name="favorites" style={[styles.barButtonIco]} />;
      }
    }
  };
  render() {
    const { title } = this.props;
    return (
      <View {...this.props} style={styles.navBar}>
        <View style={styles.leftContainer}>{this.backButton()}</View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>{this.rightButton()}</View>
      </View>
    );
  }
}

export default NavBar;
