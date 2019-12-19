import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {CartService} from './services/cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit() {
    this.ingredients = this.cartService.getIngredients();
    this.cartService.ingredientsChanged.subscribe(ingredients => this.ingredients = ingredients);
  }
}
