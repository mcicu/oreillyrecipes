import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './services/recipe.service';
import {LoggingService} from '../services/logging.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  recipeSelectedSubscription: Subscription;

  constructor(private loggingService: LoggingService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.recipeSelectedSubscription = this.recipeService.recipeSelectedEmitter.subscribe(
      recipe => this.onRecipeSelected(recipe));
    this.route.params.subscribe(
      params => {
        const recipeId = Number.parseInt(params.recipeId, 0);
        this.selectedRecipe = this.recipeService.getRecipe(recipeId);
      });
  }

  ngOnDestroy(): void {
    this.recipeSelectedSubscription.unsubscribe();
  }

  onRecipeSelected(recipe: Recipe) {
    this.loggingService.log('Selected recipe ' + recipe);
    this.selectedRecipe = recipe;
  }

  onNextRecipe() {
    if (null !== this.selectedRecipe) {
      const nextRecipeId: number = this.selectedRecipe.id + 1;
      this.router.navigate(['/recipes', nextRecipeId], {queryParams: {navigatingUsingNext: true}});
    }
  }

  onPrevRecipe() {
    if (null !== this.selectedRecipe) {
      const previousRecipeId: number = this.selectedRecipe.id - 1;
      this.router.navigate(['/recipes', previousRecipeId], {queryParams: {navigatingUsingPrevious: true}});
    }
  }
}
