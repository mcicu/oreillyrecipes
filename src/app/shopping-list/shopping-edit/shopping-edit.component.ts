import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('productNameInput', {static: true}) productNameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('productAmountInput', {static: true}) productAmountInputRef: ElementRef<HTMLInputElement>;

  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit() {
  }

  addItemToList() {
    const ingName = this.productNameInputRef.nativeElement.value;
    const ingAmount = Number.parseInt(this.productAmountInputRef.nativeElement.value, 10);
    const ingredient = new Ingredient(ingName, ingAmount);
    this.cartService.addIngredient(ingredient);
  }
}
