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

export default class GenericScreen extends Component<Props> {
  render() {
    return (
      <View>
        <View style={styles.navBar}>
          <Text style={styles.title}>Title</Text>
        </View>
        <View style={[styles.navBar, styles.redBar]}>
          <Text style={styles.title}>Title</Text>
        </View>
        {/* content goes here */}
      </View>
    );
  }
}
