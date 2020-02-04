import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../services/recipe.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-recipe-cockpit',
  templateUrl: './recipe-cockpit.component.html',
  styleUrls: ['./recipe-cockpit.component.css']
})
export class RecipeCockpitComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private recipeListService: RecipeService) {
  }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      recipeName: new FormControl(null),
      recipeDescription: new FormControl(null),
      recipeImagePath: new FormControl('URL here')
    });
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    const name = this.recipeForm.value.recipeName;
    const description = this.recipeForm.value.recipeDescription;
    const imagePath = this.recipeForm.value.recipeImagePath;
    this.saveRecipe(name, description, imagePath);
  }

  saveRecipe(name: string, description: string, imagePath: string) {
    const recipe = {name, description, imagePath, ingredients: []};
    this.recipeListService.addRecipe(recipe);
  }
}
