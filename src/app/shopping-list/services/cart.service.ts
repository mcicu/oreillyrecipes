import {Ingredient} from '../../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from '../../services/logging.service';

@Injectable()
export class CartService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
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

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.logger.log('Added ingredient ' + ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.logger.log('Added ingredients ' + ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
