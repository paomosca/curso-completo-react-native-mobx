/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

import styles from "./Styles/ExploreScreenStyles";

import NavBar from "../Components/NavBar";
import TabBar from "../Components/TabBar";
import RecipeRow from "../Components/RecipeRow";
import RecommendationBox from "../Components/RecommendationBox";

import { observer, inject } from "mobx-react/native";

@inject("recipes")
@observer
export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  componentDidMount = () => {
    console.log("componentDidMount CategoryScreen");
    const { navigation, recipes } = this.props;
    const category = navigation.getParam("category", {});
    recipes.getRecipes(category.id);
  };
  keyExtractor = (item, index) => item.id;
  renderList = () => {
    const { recipes } = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={recipes.recipesSource}
        renderItem={({ item }) => <RecipeRow data={item} />}
      />
    );
  };

  render() {
    console.log("render");
    const { navigation } = this.props;
    const category = navigation.getParam("category", {});

    return (
      <View style={[styles.mainScreen]}>
        <NavBar leftButton={true} title={category.name} rightButton={false} />

        <View style={styles.container}>{this.renderList()}</View>
      </View>
    );
  }
}
