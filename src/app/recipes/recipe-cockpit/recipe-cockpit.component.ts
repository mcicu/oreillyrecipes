import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {FormArray, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

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
      recipeName: new FormControl(null, Validators.required, this.delayedNameValidator),
      recipeDescription: new FormControl(null, Validators.required),
      recipeImagePath: new FormControl('URL here'),
      ingredientsArray: new FormArray([])
    });

    this.recipeForm.get('recipeName').statusChanges.subscribe(next => {
      console.log(next);
    });
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    const name = this.recipeForm.value.recipeName;
    const description = this.recipeForm.value.recipeDescription;
    const imagePath = this.recipeForm.value.recipeImagePath;
    const ingredients = this.recipeForm.value.ingredientsArray;
    this.saveRecipe(name, description, imagePath, ingredients);
  }

  onAddIngredientToForm() {
    const ingredientsArray = this.recipeForm.get('ingredientsArray') as FormArray;
    const ingredientFormGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, this.ingredientAmountValidator])
    });
    ingredientsArray.push(ingredientFormGroup);
  }

  saveRecipe(name: string, description: string, imagePath: string, ingredients: { name: string, amount: number }[]) {
    const recipe = {name, description, imagePath, ingredients};
    this.recipeListService.addRecipe(recipe);
  }

  ingredientAmountValidator(input: FormControl): ValidationErrors {
    if (false === /^\d*(\.\d+)?$/.test(input.value)) {
      return {valueIsNaN: true};
    }
    return null;
  }

  delayedNameValidator(input: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('called async validator');
        if (input.value === 'test') {
          resolve({testIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
