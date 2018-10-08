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

export default class GenericScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }

  pressFavorite = () => {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite
    });
  };

  render() {
    console.log("render");

    const { favorite } = this.state;
    return (
      <View style={[styles.mainScreen]}>
        <NavBar
          leftButton={true}
          title="Titulo"
          rightButton={true}
          onPressFavorite={this.pressFavorite}
          favorite={favorite}
        />
        <View style={styles.container}>{/* content goes here */}</View>
      </View>
    );
  }
}
