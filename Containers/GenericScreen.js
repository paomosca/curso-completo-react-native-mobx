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
  constructor(props) {
    super(props);

    this.state = {
      var1: 5
    };
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");

    setTimeout(() => {
      console.log("changing state");
      this.setState({
        var1: 2
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
    return (
      <View>
        <NavBar title="Titulo" style={styles.navBar} />
        {/* content goes here */}
      </View>
    );
  }
}
