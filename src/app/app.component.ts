import {Component} from '@angular/core';
import {RecipeService} from './recipes/services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'o\'reilly recipes';
}
