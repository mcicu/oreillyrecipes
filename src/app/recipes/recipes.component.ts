import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Output() selectedRecipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(event: Recipe) {
    this.selectedRecipe = event;
  }
}
