import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import CustomIcon from "./CustomIcon";

import styles from "./Styles/NavBarStyles";

class NavBar extends React.Component {
  pressFavorite = () => {
    const { onPressFavorite } = this.props;
    if (typeof onPressFavorite === "function") {
      onPressFavorite();
    }
  };
  backButton = () => {
    const { leftButton } = this.props;
    if (leftButton) {
      return (
        <TouchableOpacity onPress={() => alert("back")}>
          <CustomIcon name="left" style={styles.favIco} />
        </TouchableOpacity>
      );
    }
  };

  rightButton = () => {
    const { rightButton, favorite } = this.props;
    if (rightButton) {
      if (favorite) {
        return (
          <TouchableWithoutFeedback onPress={this.pressFavorite}>
            <CustomIcon
              name="favorites"
              style={[styles.barButtonIco, styles.favorite]}
            />
          </TouchableWithoutFeedback>
        );
      } else {
        return (
          <TouchableWithoutFeedback onPress={this.pressFavorite}>
            <CustomIcon name="favorites" style={[styles.barButtonIco]} />
          </TouchableWithoutFeedback>
        );
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
