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

import { observable } from "mobx";
import { observer, inject } from "mobx-react/native";

import TestStore from "../MobX/TestStore";

@inject("recipes")
@observer
class ExploreScreen extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  componentDidMount = () => {
    const { recipes } = this.props;
    recipes.getRecipes();
    recipes.getRecommended();
  };

  keyExtractor = (item, index) => item.id;
  renderList = () => {
    const { recipes } = this.props;
    return (
      <FlatList
        ListHeaderComponent={this.renderRecommended}
        keyExtractor={this.keyExtractor}
        data={recipes.recipesSource}
        renderItem={({ item }) => <RecipeRow data={item} />}
      />
    );
  };

  renderRecommended = () => {
    const { recipes } = this.props;

    return <RecommendationBox data={recipes.recommendedSource} />;
  };
  render() {
    console.log("render");
    return (
      <View style={[styles.mainScreen]}>
        <NavBar
          menuButton={true}
          leftButton={false}
          title={`Explore`}
          rightButton={false}
        />

        <View style={styles.container}>{this.renderList()}</View>
        <TabBar selected="explore" />
      </View>
    );
  }
}
export default ExploreScreen;
