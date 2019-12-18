import {Ingredient} from '../../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from '../../services/logging.service';

@Injectable()
export class CartService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  private logger: LoggingService;
  ingredientAdded = new EventEmitter<Ingredient>();

  constructor(logger: LoggingService) {
    this.logger = logger;
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(ingredient);
    this.logger.log('Added ingredient ' + ingredient);
  }
}
