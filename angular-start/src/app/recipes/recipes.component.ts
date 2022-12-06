import { Component } from '@angular/core'
import { Recipe } from './recipe.model'
@Component({
    selector: 'recipes-component',
    templateUrl : 'recipes.component.html',
    styleUrls : ['recipes.component.css']
})

export class recipes{
    recipeData : Recipe;
    assignD(event){
       console.log(event)
       this.recipeData = event;
    } 
}