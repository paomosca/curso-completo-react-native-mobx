import { observable, computed } from "mobx";

import API from "../Services/Api";
const api = API.create();

const categoriesData = [
  {
    id: "1",
    name: "Fish"
  },
  {
    id: "2",
    name: "Meat"
  },
  {
    id: "3",
    name: "Breakfast"
  },
  {
    id: "4",
    name: "Fruit"
  }
];

const dataList = [
  {
    id: "1111",
    name: "Escovitch Fish",
    categoryId: 1,
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
    categoryId: 2,
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
    categoryId: 3,
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

class RecipeStore {
  @observable categories = [];
  @observable recipes = [];
  @observable favorites = [];
  @observable recommended = [];
  @observable loading = false;

  @computed
  get categoriesSource() {
    return this.categories.slice();
  }
  @computed
  get recipesSource() {
    return this.recipes.slice();
  }
  @computed
  get favoritesSource() {
    return this.favorites.slice();
  }
  @computed
  get recommendedSource() {
    return this.recommended.slice();
  }

  async getCategories() {
    /*
    connecting server (loading true)
    asking categories
    loading false
    saving in this.categories
    */

    this.loading = true;
    const response = await api.getCategories();
    console.log("response", response);
    this.loading = false;
    if (response.ok && response.data) {
      this.categories = response.data;
    } else {
      this.categories = [];
    }
  }

  async getRecipes(categoryId = null) {
    this.loading = true;

    const response = await api.getRecipes(categoryId || null);
    console.log("response getRecipes", response);
    this.loading = false;
    if (response.ok && response.data) {
      this.recipes = response.data;
    } else {
      this.recipes = [];
    }
  }

  async getFavorites() {
    this.loading = true;
    const response = await api.getFavorites();
    console.log("response", response);
    this.loading = false;
    if (response.ok && response.data) {
      this.favorites = response.data;
    } else {
      this.favorites = [];
    }
  }

  async getRecommended() {
    this.loading = true;
    const response = await api.getRecommended();
    console.log("response getRecommended", response);

    this.loading = false;
    if (response.ok && response.data) {
      this.recommended = response.data;
    } else {
      this.recommended = [];
    }
  }
}

export default RecipeStore;
