import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('productNameInput', {static: true}) productNameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('productAmountInput', {static: true}) productAmountInputRef: ElementRef<HTMLInputElement>;
  @Output() shoppingListItem = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  addItemToList() {
    const ingName = this.productNameInputRef.nativeElement.value;
    const ingAmount = Number.parseInt(this.productAmountInputRef.nativeElement.value, 10);
    const ingredient = new Ingredient(ingName, ingAmount);
    this.shoppingListItem.emit(ingredient);
  }
}
