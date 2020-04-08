import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {CartService} from '../services/cart.service';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', {static: true}) ingredientInputForm: NgForm;

  private editMode = false;
  private editedIngredient: Ingredient;
  private editedIngredientIndex: number;
  private startedEditingSubscription: Subscription;


  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit() {
    this.startedEditingSubscription = this.cartService.startedEditingSubject.subscribe(
      index => {
        this.editMode = true;
        this.editedIngredient = this.cartService.getIngredient(index);
        this.ingredientInputForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
        this.editedIngredientIndex = index;
      });
  }

  addItemToList() {
    const formValue = this.ingredientInputForm.value;
    const ingredient = new Ingredient(formValue.name, formValue.amount);

    if (this.editMode) {
      this.cartService.updateIngredient(this.editedIngredientIndex, ingredient);
    } else {
      this.cartService.addIngredient(ingredient);
    }
    this.clearForm();
  }

  clearForm() {
    this.ingredientInputForm.reset();
    this.editMode = false;
    this.editedIngredient = null;
    this.editedIngredientIndex = null;
  }

  onDeleteIngredient() {
    this.cartService.deleteIngredient(this.editedIngredientIndex);
    this.clearForm();
  }
}
