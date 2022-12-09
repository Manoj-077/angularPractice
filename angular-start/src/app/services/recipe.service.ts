import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  e = new EventEmitter();
  recipes: Recipe[] = [new Recipe('somerecipe','first recipe','https://www.tasteofhome.com/wp-content/uploads/2022/10/Sea-Salt-Sticks-_EXPS_RC22_269881_DR_09_30_2b.jpg'),
  new Recipe('second recipe','this is the second recipe','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F03%2F01%2Fcucumber-sandwich.jpg')]
  constructor( ) { }
  getRecipes(){
    return this.recipes.slice()
  }
  ngOnInit(): void {
    
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
}
