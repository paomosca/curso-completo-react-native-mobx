import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles/CategoryRowStyles";

import CustomIcon from "../Components/CustomIcon";

import { withNavigation } from "react-navigation";

class CategoryRow extends React.Component {
  onPress = () => {
    const { navigation, data } = this.props;
    navigation.navigate("Category", { category: data });
  };

  render() {
    const { data } = this.props;

    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.categoryRow}>
          <Text style={styles.categoryText}>{data.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CategoryRow);
