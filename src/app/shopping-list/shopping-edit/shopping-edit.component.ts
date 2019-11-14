import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('productNameInput', {static: true}) productNameInput: ElementRef<HTMLInputElement>;
  @ViewChild('productAmountInput', {static: true}) productAmountInput: ElementRef<HTMLInputElement>;
  @Output() shoppingListItem = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  addItemToList() {
    const ingredient = new Ingredient(
      this.productNameInput.nativeElement.value,
      Number.parseInt(this.productAmountInput.nativeElement.value, 10));
    this.shoppingListItem.emit(ingredient);
  }
}
