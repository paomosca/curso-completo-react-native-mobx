import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./Styles/MiniRecipeStyles";

import { withNavigation } from "react-navigation";

class MiniRecipe extends React.PureComponent {
  onPress = () => {
    const { navigation, data } = this.props;

    navigation.navigate("Details", { data });
  };

  renderImage = () => {
    const { data } = this.props;

    let imageUrl = "http://via.placeholder.com/640x360";
    if (data && data.photo) {
      imageUrl = data.photo;
    }

    return <Image source={{ uri: imageUrl }} style={styles.recipeImage} />;
  };
  render() {
    const { data } = this.props;
    console.log("recommended", data);
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>{this.renderImage()}</View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(MiniRecipe);
