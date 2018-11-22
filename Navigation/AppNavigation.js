import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import ExploreScreen from "../Containers/ExploreScreen";
import CategoriesScreen from "../Containers/CategoriesScreen";
import RecipeDetailsScreen from "../Containers/RecipeDetailsScreen";

import FavoritesScreen from "../Containers/FavoritesScreen";
import CategoryScreen from "../Containers/CategoryScreen";

import InfoScreen from "../Containers/InfoScreen";
import SideMenu from "../Components/SideMenu";

const TabNav = createBottomTabNavigator(
  {
    Explore: { screen: ExploreScreen },
    Categories: { screen: CategoriesScreen },
    Favorites: { screen: FavoritesScreen }
  },
  {
    headerMode: "none",
    initialRouteName: "Explore",
    navigationOptions: { tabBarVisible: false }
  }
);

const Drawer = createDrawerNavigator(
  {
    Tabs: {
      screen: TabNav
    },
    Info: { screen: InfoScreen }
  },
  {
    contentComponent: SideMenu
  }
);
const AppNavigator = createStackNavigator(
  {
    Home: { screen: Drawer },
    Details: { screen: RecipeDetailsScreen },
    Category: { screen: CategoryScreen }
  },
  {
    headerMode: "none"
  }
);

export default AppNavigator;
