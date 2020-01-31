import {Recipe} from '../recipe.model';
import {Injectable} from '@angular/core';
import {LoggingService} from '../../services/logging.service';
import {Ingredient} from '../../shared/ingredient.model';
import {CartService} from '../../shopping-list/services/cart.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChangedSubject = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Easy Pizza',
      'Description of recipe for Pizza',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg',
      [
        new Ingredient('Flour', 500),
        new Ingredient('Cheese', 200),
        new Ingredient('Pepperoni', 100)
      ]
    ),
    new Recipe(1,
      'Beef Stew',
      'Slow cooker recipe - Beef stew',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beef-stew-slow-cooker.jpg',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Potatoes', 5),
        new Ingredient('Carrots', 3)
      ])
  ];

  constructor(private loggingService: LoggingService, private cartService: CartService) {
  }

  addRecipe(recipeDTO: { name: string, description: string, imagePath: string, ingredients: Ingredient[] }) {
    const recipe = new Recipe(this.recipes.length, recipeDTO.name, recipeDTO.description, recipeDTO.imagePath, recipeDTO.ingredients);
    this.recipes.push(recipe);
    this.loggingService.log('Added recipe ' + recipe);
    this.recipesChangedSubject.next(this.getRecipes());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.cartService.addIngredients(ingredients);
  }
}
