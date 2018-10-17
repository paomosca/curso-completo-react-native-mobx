/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

import styles from "./Styles/ExploreScreenStyles";

import NavBar from "../Components/NavBar";
import TabBar from "../Components/TabBar";
import RecipeRow from "../Components/RecipeRow";
import RecommendationBox from "../Components/RecommendationBox";

import { observable } from "mobx";
import { observer } from "mobx-react/native";

const dataList = [
  {
    id: "1111",
    name: "Escovitch Fish",
    categoryId: "1",
    categoryName: "Fish",
    duration: 11,
    complexity: "Hard",
    people: 3,
    recommended: true,
    favorite: true,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
    photo: "https://www.themealdb.com/images/media/meals/1520084413.jpg"
  },
  {
    id: "2222",
    name: "Escovitch Fish",
    categoryId: "1",
    categoryName: "Fish",
    duration: 11,
    complexity: "Hard",
    people: 3,
    recommended: true,
    favorite: true,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
    photo: "https://www.themealdb.com/images/media/meals/1520084413.jpg"
  },
  {
    id: "3333",
    name: "Escovitch Fish",
    categoryId: "1",
    categoryName: "Fish",
    duration: 11,
    complexity: "Hard",
    people: 3,
    recommended: true,
    favorite: true,
    ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    description:
      "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
    photo: "https://www.themealdb.com/images/media/meals/1520084413.jpg"
  }
];

const recipeDate = {
  id: "52944",
  name: "Escovitch Fish",
  categoryId: "1",
  categoryName: "Fish",
  duration: 11,
  complexity: "Hard",
  people: 3,
  recommended: true,
  favorite: true,
  ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
  description:
    "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
  photo: "https://www.themealdb.com/images/media/meals/1520084413.jpg"
};

@observer
class ExploreScreen extends Component {
  counter = 0;

  constructor(props) {
    super(props);

    console.log("constructor");

    /*setInterval(() => {
      this.counter++;
      console.log("this.counter:", this.counter);
    }, 1000);*/
  }

  keyExtractor = (item, index) => item.id;
  renderList = () => {
    return (
      <FlatList
        ListHeaderComponent={this.renderRecommended}
        keyExtractor={this.keyExtractor}
        data={dataList}
        renderItem={({ item }) => <RecipeRow data={item} />}
      />
    );
  };

  renderRecommended = () => {
    return <RecommendationBox data={dataList} />;
  };
  render() {
    console.log("render");

    return (
      <View style={[styles.mainScreen]}>
        <NavBar
          leftButton={false}
          title={`Title - ${this.counter}`}
          rightButton={false}
        />

        <View style={styles.container}>{this.renderList()}</View>
        <TabBar selected="explore" />
      </View>
    );
  }
}
export default ExploreScreen;
