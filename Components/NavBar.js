import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import CustomIcon from "./CustomIcon";

import styles from "./Styles/NavBarStyles";

import { withNavigation } from "react-navigation";

class NavBar extends React.Component {
  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  openMenu = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };
  pressFavorite = () => {
    const { onPressFavorite } = this.props;
    if (typeof onPressFavorite === "function") {
      onPressFavorite();
    }
  };
  backButton = () => {
    const { leftButton, transparent } = this.props;
    if (leftButton) {
      return (
        <TouchableOpacity onPress={this.goBack}>
          <CustomIcon
            name="left"
            style={[styles.favIco, transparent ? styles.alternate : null]}
          />
        </TouchableOpacity>
      );
    }
  };
  menuButton = () => {
    const { menuButton } = this.props;
    if (menuButton) {
      return (
        <TouchableOpacity onPress={this.openMenu}>
          <CustomIcon name="menu" style={styles.favIco} />
        </TouchableOpacity>
      );
    }
  };

  rightButton = () => {
    const { rightButton, favorite, transparent } = this.props;
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
            <CustomIcon
              name="favorites"
              style={[
                styles.barButtonIco,
                transparent ? styles.alternate : null
              ]}
            />
          </TouchableWithoutFeedback>
        );
      }
    }
  };
  render() {
    const { title, transparent } = this.props;
    return (
      <View
        {...this.props}
        style={[styles.navBar, transparent ? styles.transparent : null]}
      >
        <View style={styles.leftContainer}>
          {this.backButton()}
          {this.menuButton()}
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>{this.rightButton()}</View>
      </View>
    );
  }
}

export default withNavigation(NavBar);
