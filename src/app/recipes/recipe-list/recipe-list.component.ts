import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Description of recipe', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'),
    new Recipe('A test recipe', 'Description of recipe', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
