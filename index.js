/** @format */

import { AppRegistry } from "react-native";
import App from "./Containers/App";

import { name as appName } from "./app.json";

import applyDecoratedDescriptor from "@babel/runtime/helpers/es6/applyDecoratedDescriptor";
import initializerDefineProperty from "@babel/runtime/helpers/es6/initializerDefineProperty";

Object.assign(babelHelpers, {
  applyDecoratedDescriptor,
  initializerDefineProperty
});

AppRegistry.registerComponent(appName, () => App);
