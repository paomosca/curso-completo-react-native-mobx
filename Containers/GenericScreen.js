/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

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
        <View
          style={{
            marginTop: 20,
            height: 56,
            backgroundColor: "#eeeeee",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontWeight: "bold"
            }}
          >
            Title
          </Text>
        </View>
        {/* content goes here */}
      </View>
    );
  }
}
