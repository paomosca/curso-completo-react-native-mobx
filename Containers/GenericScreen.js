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
/*

<screen>
  <navbar>
    title
  </navbar>
  content
</screen>

*/

import NavBar from "../Components/NavBar";

export default class GenericScreen extends Component<Props> {
  static navigationOptions = {
    title: "Home"
  };
  constructor(props) {
    super(props);

    this.state = {
      example: 5,
      favorite: false
    };
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  pressFavorite = () => {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite
    });
  };
  componentDidMount() {
    console.log("componentDidMount");

    const example = this.state.example;
    this.setState(
      {
        example: 3
      },
      () => {
        console.log(this.state.example); // <<---- 3
      }
    );

    console.log(this.state.example); // <<---- 5

    setTimeout(() => {
      console.log("changing state");
      this.setState({
        example: 2
      });
    }, 500);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

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
