/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import { Provider } from "mobx-react/native";

import stores from "../MobX";

import AppNavigation from "../Navigation/AppNavigation";

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigation />
      </Provider>
    );
  }
}
