import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { FormsModule } from '@angular/forms'
import { clientComponent } from './client/client.component'
import { headerComponent } from './header/header.component';
import { recipes } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AppRecipeList } from './recipes/recipe-list/recipe-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DropdownhDirective } from './shared/dropdownh.directive'
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { AppRouting } from './app-routing.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component'
@NgModule({
  declarations: [
    AppRecipeList,
    serverComponent,
    clientComponent,
    headerComponent,
    recipes,
    AppComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    DropdownhDirective,
    RecipeStartComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [RecipeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
