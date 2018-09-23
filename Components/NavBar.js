import React from "react";

import { View, Text } from "react-native";

import { createIconSetFromFontello } from "react-native-vector-icons";
import config from "../Theme/Fonts/config";

const CustomIcon = createIconSetFromFontello(config);

import styles from "./Styles/NavBarStyles";

class NavBar extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View {...this.props}>
        <Text style={styles.title}>{title}</Text>
        <CustomIcon name="favorites" style={styles.favIco} />
      </View>
    );
  }
}

export default NavBar;
