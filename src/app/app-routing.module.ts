import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthenticationGuard} from './services/authentication-guard.service';
import {RecipeCockpitComponent} from './recipes/recipe-cockpit/recipe-cockpit.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: 'new', component: RecipeCockpitComponent, canActivateChild: [AuthenticationGuard]},
      {path: ':recipeId', component: RecipeDetailComponent, canActivate: [AuthenticationGuard]}
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent, data: {title: 'Shopping List'}},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
