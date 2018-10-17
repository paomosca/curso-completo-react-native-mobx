import TestStore from "./TestStore";
import RecipeStore from "./RecipeStore";

export default {
  test: new TestStore(),
  recipes: new RecipeStore()
};
