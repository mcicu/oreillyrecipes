import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './services/recipe.service';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  private loggingService: LoggingService;
  private recipeService: RecipeService;

  constructor(loggingService: LoggingService, recipeService: RecipeService) {
    this.loggingService = loggingService;
    this.recipeService = recipeService;
    recipeService.recipeSelectedEmitter.subscribe(recipe => this.onRecipeSelected(recipe));
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.loggingService.log('Selected recipe ' + recipe);
    this.selectedRecipe = recipe;
  }
}
