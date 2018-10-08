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

const categoriesData = [
  {
    id: "1",
    name: "Fish"
  },
  {
    id: "2",
    name: "Meat"
  },
  {
    id: "3",
    name: "Breakfast"
  },
  {
    id: "4",
    name: "Fruit"
  }
];

import NavBar from "../Components/NavBar";

class CategoriesScreen extends Component {
  static navigationOptions = {
    title: "Categories"
  };
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  keyExtractor = (item, index) => item.id;

  renderRow = ({ item }) => {
    return <CategoryRow data={item} />;
  };

  renderList = () => {
    return (
      <FlatList
        contentContainerStyle={styles.listContent}
        keyExtractor={this.keyExtractor}
        data={categoriesData}
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
