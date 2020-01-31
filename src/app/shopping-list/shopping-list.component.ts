import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {CartService} from './services/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private cartService: CartService;
  private ingredientsChangedSubscription: Subscription;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit() {
    this.ingredients = this.cartService.getIngredients();
    this.ingredientsChangedSubscription = this.cartService.ingredientsChangedSubject.subscribe(
      ingredients => this.ingredients = ingredients);
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
  }
}
