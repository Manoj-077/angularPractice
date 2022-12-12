import { Component } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
   ingredients = this.slService.ingredients;
   
   constructor(private slService : ShoppingListService){

   }
   onEditItem(index){
      this.slService.startEdit.next(index);
   }
}
