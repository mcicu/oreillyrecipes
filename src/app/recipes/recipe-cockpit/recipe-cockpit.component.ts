import {AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-cockpit',
  templateUrl: './recipe-cockpit.component.html',
  styleUrls: ['./recipe-cockpit.component.css']
})
export class RecipeCockpitComponent implements AfterContentInit {

  @Output() recipeCreatedEmitter: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @ContentChild('recipeCockpitParagraphInfo', {static : false}) paragraphInfo: ElementRef<HTMLParagraphElement>;

  saveRecipe(name: string, description: string, imagePath: string) {
    const recipe: Recipe = new Recipe(name, description, imagePath);
    this.recipeCreatedEmitter.emit(recipe);
  }

  ngAfterContentInit(): void {
    console.log('Content initialized');
    console.log('Paragraph is: ' + this.paragraphInfo.nativeElement.innerText);
  }
}
