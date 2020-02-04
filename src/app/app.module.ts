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
import {HomepageComponent} from './homepage/homepage.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationService} from './services/authentication.service';
import {AuthenticationGuard} from './services/authentication-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent,
    ShoppingListComponent, ShoppingEditComponent, RecipeCockpitComponent, DropdownDirective, HomepageComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [LoggingService, CartService, AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
