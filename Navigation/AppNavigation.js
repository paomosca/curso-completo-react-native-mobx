import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import ExploreScreen from "../Containers/ExploreScreen";
import CategoriesScreen from "../Containers/CategoriesScreen";
import RecipeDetailsScreen from "../Containers/RecipeDetailsScreen";

const TabNav = createBottomTabNavigator(
  {
    Explore: { screen: ExploreScreen },
    Categories: { screen: CategoriesScreen },
    Favorites: { screen: GenericScreen }
  },
  {
    headerMode: "none",
    initialRouteName: "Explore",
    navigationOptions: { tabBarVisible: false }
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: { screen: TabNav },
    Details: { screen: RecipeDetailsScreen }
  },
  {
    headerMode: "none"
  }
);

export default AppNavigator;
