import {AfterContentInit, Component, ViewChild} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../services/recipe.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recipe-cockpit',
  templateUrl: './recipe-cockpit.component.html',
  styleUrls: ['./recipe-cockpit.component.css']
})
export class RecipeCockpitComponent implements AfterContentInit {

  @ViewChild('inputForm', {static: false}) ngForm: NgForm;

  constructor(private recipeListService: RecipeService) {
  }

  saveRecipe(name: string, description: string, imagePath: string) {
    const recipe = {name, description, imagePath, ingredients: []};
    this.recipeListService.addRecipe(recipe);
  }

  ngAfterContentInit(): void {
    console.log('Content initialized');
  }

  onSubmit() {
    console.log(this.ngForm.value);
    const name = this.ngForm.value.recipeName;
    const description = this.ngForm.value.recipeDescription;
    const imagePath = this.ngForm.value.recipeImagePath;
    this.saveRecipe(name, description, imagePath);
  }
}
