import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipes1 : Recipe;
  @Output() onRecipe = new EventEmitter();
  i = 0;
  inc(){
    this.i = this.i + 1;
  }
  clickedon(event){
    this.onRecipe.emit(this.recipes1)
    
  }
}
