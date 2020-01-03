import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './services/recipe.service';
import {LoggingService} from '../services/logging.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;

  constructor(private loggingService: LoggingService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log('Parametrii sunt' + params);
      }
    );
  }

  ngOnDestroy(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.loggingService.log('Selected recipe ' + recipe);
    this.selectedRecipe = recipe;
  }

  onNextRecipe() {
    if (null !== this.selectedRecipe) {
      const nextRecipeId: number = this.selectedRecipe.id + 1;
      this.router.navigate([nextRecipeId], {relativeTo: this.route, queryParams: {navigatingUsingNext: true}});
    }
  }

  onPrevRecipe() {
    if (null !== this.selectedRecipe) {
      const previousRecipeId: number = this.selectedRecipe.id - 1;
      this.router.navigate([previousRecipeId], {relativeTo: this.route, queryParams: {navigatingUsingNext: true}});
    }
  }
}
