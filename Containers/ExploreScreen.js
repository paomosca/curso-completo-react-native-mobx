/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import styles from "./Styles/GenericScreenStyles";

import NavBar from "../Components/NavBar";

import RecipeRow from "../Components/RecipeRow";

export default class ExploreScreen extends Component {
  static navigationOptions = {
    title: "Explore"
  };
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  render() {
    console.log("render");

    return (
      <View style={[styles.mainScreen]}>
        <NavBar leftButton={false} title="Explore" rightButton={false} />
        <RecipeRow />

        <View style={styles.container}>{/* content goes here */}</View>
      </View>
    );
  }
}
