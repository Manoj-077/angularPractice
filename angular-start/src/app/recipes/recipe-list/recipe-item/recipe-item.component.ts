import { Component, inject, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipes1 : Recipe;
  i = 0;
  inc(){
    this.i = this.i + 1;
  }
  clickedon(event){
    console.log(event.target.innerHTML)
  }
}
