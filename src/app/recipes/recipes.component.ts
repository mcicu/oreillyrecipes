import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from './services/recipe.service';
import {LoggingService} from '../services/logging.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  routeFirstChild: Subscription = new Subscription();

  constructor(private loggingService: LoggingService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    if (this.route.firstChild) {
      this.routeFirstChild = this.route.firstChild.params.subscribe(
        (params: Params) => {
          console.log('Parametrii sunt', params);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.routeFirstChild.unsubscribe();
  }

}
