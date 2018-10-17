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
export default class FavoritesScreen extends Component {
  static navigationOptions = {
    title: "Explore"
  };
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  componentDidMount = () => {
    const { recipes } = this.props;
    recipes.getFavorites();
  };
  keyExtractor = (item, index) => item.id;
  renderList = () => {
    const { recipes } = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={recipes.favoritesSource}
        renderItem={({ item }) => <RecipeRow data={item} />}
      />
    );
  };

  render() {
    console.log("render");

    return (
      <View style={[styles.mainScreen]}>
        <NavBar leftButton={false} title="Favorites" rightButton={false} />

        <View style={styles.container}>{this.renderList()}</View>
        <TabBar selected="favorites" />
      </View>
    );
  }
}
