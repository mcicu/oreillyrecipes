import {AfterContentInit, Component} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-cockpit',
  templateUrl: './recipe-cockpit.component.html',
  styleUrls: ['./recipe-cockpit.component.css']
})
export class RecipeCockpitComponent implements AfterContentInit {

  // @Output() recipeCreatedEmitter: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  // @ContentChild('recipeCockpitParagraphInfo', {static: false}) paragraphInfo: ElementRef<HTMLParagraphElement>;

  constructor(private recipeListService: RecipeService) {
  }

  saveRecipe(name: string, description: string, imagePath: string) {
    const recipe: Recipe = new Recipe(name, description, imagePath);
    this.recipeListService.addRecipe(recipe);
  }

  ngAfterContentInit(): void {
    console.log('Content initialized');
  }
}
