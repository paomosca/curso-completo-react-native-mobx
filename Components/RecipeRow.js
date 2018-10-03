import React from "react";

import { View } from "react-native";

import styles from "./Styles/RecipeRowStyles";

class RecipeRow extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer} />
        <View style={styles.infoContainer} />
      </View>
    );
  }
}
export default RecipeRow;
