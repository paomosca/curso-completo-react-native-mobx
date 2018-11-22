import React from "react";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import CustomIcon from "./CustomIcon";

import styles from "./Styles/SideMenuStyles";

import { withNavigation } from "react-navigation";

class SideMenu extends React.Component {
  goToInfo = () => {
    const { navigation } = this.props;

    navigation.navigate("Info");
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.menu}>
        <TouchableOpacity onPress={this.goToInfo}>
          <View style={styles.row}>
            <Text style={styles.title}>Info</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default withNavigation(SideMenu);
