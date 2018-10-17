/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

import CategoryRow from "../Components/CategoryRow";

import TabBar from "../Components/TabBar";

import styles from "./Styles/CategoriesScreenStyles";

import { observer, inject } from "mobx-react/native";

import NavBar from "../Components/NavBar";

@inject("recipes")
@observer
class CategoriesScreen extends Component {
  static navigationOptions = {
    title: "Categories"
  };
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount = () => {
    const { recipes } = this.props;
    recipes.getCategories();
  };

  keyExtractor = (item, index) => item.id;

  renderRow = ({ item }) => {
    return <CategoryRow data={item} />;
  };

  renderList = () => {
    const { recipes } = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.listContent}
        keyExtractor={this.keyExtractor}
        data={recipes.categoriesSource}
        renderItem={this.renderRow}
      />
    );
  };

  render() {
    console.log("render");

    return (
      <View style={[styles.mainScreen]}>
        <NavBar leftButton={false} title="Categories" />
        <View style={styles.container}>{this.renderList()}</View>
        <TabBar selected="categories" />
      </View>
    );
  }
}
export default CategoriesScreen;
