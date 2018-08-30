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
        <View>
          <Text>Title</Text>
        </View>
        {/* content goes here */}
      </View>
    );
  }
}
