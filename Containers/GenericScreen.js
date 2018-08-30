/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

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

const styles = StyleSheet.create({
  navBar: {
    marginTop: 20,
    height: 56,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold"
  },
  redBar: {
    backgroundColor: "#ff0000"
  }
});
