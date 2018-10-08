/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  StatusBar
} from "react-native";

import styles from "./Styles/RecipeDetailsScreenStyles";

import NavBar from "../Components/NavBar";
import CustomIcon from "../Components/CustomIcon";

export default class RecipeDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }

  renderImage = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    let imageUrl = "http://via.placeholder.com/640x360";
    if (data && data.photo) {
      imageUrl = data.photo;
    }
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.recipeImage} />
        <View style={styles.darkener} />
      </View>
    );
  };

  renderInfo = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    return (
      <View style={styles.infoContainer}>
        <Text style={styles.category}>{data.categoryName}</Text>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.properties}>
          <View style={styles.cell}>
            <CustomIcon name="duration" style={styles.cellIcon} />
            <Text style={styles.cellText}>{data.duration} Minutos</Text>
          </View>
          <View style={styles.cell}>
            <CustomIcon name="difficulty" style={styles.cellIcon} />
            <Text style={styles.cellText}>{data.complexity}</Text>
          </View>
          <View style={styles.cell}>
            <CustomIcon name="recipes" style={styles.cellIcon} />
            <Text style={styles.cellText}>{data.people} Personas</Text>
          </View>
        </View>
      </View>
    );
  };

  renderIngredients = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    if (data.ingredients) {
      return (
        <View style={styles.infoBox}>
          <Text style={styles.header}>Ingredientes</Text>
          <Text style={styles.description}>{data.ingredients}</Text>
        </View>
      );
    }
  };

  renderInstructions = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    if (data.description) {
      return (
        <View style={styles.infoBox}>
          <Text style={styles.header}>Preparacion</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      );
    }
  };

  pressFavorite = () => {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite
    });
  };

  renderContent = () => {
    return (
      <ScrollView>
        {this.renderImage()}
        {this.renderInfo()}
        {this.renderIngredients()}
        {this.renderInstructions()}
      </ScrollView>
    );
  };

  render() {
    console.log("render");

    const { navigation } = this.props;
    const data = navigation.getParam("data", {});

    const { favorite } = this.state;
    return (
      <View style={[styles.mainScreen]}>
        <StatusBar barStyle="light-content" />
        <NavBar
          leftButton={true}
          transparent={true}
          rightButton={true}
          onPressFavorite={this.pressFavorite}
          favorite={favorite}
        />
        <View style={styles.container}>{this.renderContent()}</View>
      </View>
    );
  }
}
