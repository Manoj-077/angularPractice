import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { recipes } from "./recipes/recipes.component";
import { ShoppingListService } from "./services/shopping-list.service";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRoute : Routes = [ 
{path:'', redirectTo : '/recipes', pathMatch: "full"},  
{path:'recipes', component: recipes, children:[
    {path:'', component: RecipeStartComponent},
    {path:'new', component: RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent},
    {path: ':id/edit',component:RecipeEditComponent}]},
{path: 'shopping-list', component: ShoppingListComponent}]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports : [RouterModule]
})

export class AppRouting{
    
}