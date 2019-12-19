import {Recipe} from '../recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from '../../services/logging.service';
import {Ingredient} from '../../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  recipeSelectedEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Easy Pizza',
      'Description of recipe for Pizza',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg',
      [
        new Ingredient('Flour', 500),
        new Ingredient('Cheese', 200),
        new Ingredient('Pepperoni', 100)
      ]
    ),
    new Recipe('Beef Stew',
      'Slow cooker recipe - Beef stew',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beef-stew-slow-cooker.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Potatoes', 5),
        new Ingredient('Carrots', 3)
      ])
  ];

  constructor(private loggingService: LoggingService) {
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.loggingService.log('Added recipe ' + recipe);
    this.recipesChanged.emit(this.getRecipes());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
