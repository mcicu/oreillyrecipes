import {Ingredient} from '../../shared/ingredient.model';
import {Injectable} from '@angular/core';
import {LoggingService} from '../../services/logging.service';
import {Subject} from 'rxjs';

@Injectable()
export class CartService {

  ingredientsChangedSubject = new Subject<Ingredient[]>();
  startedEditingSubject = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  private logger: LoggingService;

  constructor(logger: LoggingService) {
    this.logger = logger;
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.logger.log('Added ingredient ' + ingredient);
    this.ingredientsChangedSubject.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.logger.log('Added ingredients ' + ingredients);
    this.ingredientsChangedSubject.next(this.getIngredients());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChangedSubject.next(this.getIngredients());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChangedSubject.next(this.getIngredients());
  }
}
