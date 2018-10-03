import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import ExploreScreen from "../Containers/ExploreScreen";

const TabNav = createBottomTabNavigator(
  {
    Explore: { screen: ExploreScreen },
    Categories: { screen: GenericScreen },
    Favorites: { screen: GenericScreen }
  },
  {
    headerMode: "none",
    initialRouteName: "Explore"
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: { screen: TabNav }
  },
  {
    headerMode: "none"
  }
);

export default AppNavigator;
