import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {RecipeCockpitComponent} from './recipes/recipe-cockpit/recipe-cockpit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {LoggingService} from './services/logging.service';
import {CartService} from './shopping-list/services/cart.service';
import {RouterModule, Routes} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipes/:recipeId', component: RecipesComponent},
  {path: 'shopping-list', component: ShoppingListComponent, data: {title: 'Shopping List'}}
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent,
    ShoppingListComponent, ShoppingEditComponent, RecipeCockpitComponent, DropdownDirective, HomepageComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggingService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
