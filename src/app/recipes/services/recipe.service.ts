import {Recipe} from '../recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from '../../services/logging.service';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  recipeSelectedEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'Description of recipe', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'),
    new Recipe('Slow cooker', 'Slow cooker recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beef-stew-slow-cooker.jpg')
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
