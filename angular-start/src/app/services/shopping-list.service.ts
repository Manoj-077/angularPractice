import { Injectable } from '@angular/core';
import { Subject } from 'rxjs-compat';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients :Ingredient[] = [new Ingredient('oranges',60),new Ingredient('carrots',80)];
  startEdit = new Subject();
  constructor() { }
  getIngredients(index){
    return this.ingredients[index];
  }
  updateIngredient(index : number , newIngredient : Ingredient){
      this.ingredients[index] = newIngredient;  
  }
}
