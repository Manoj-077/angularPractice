import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('f') ele : NgForm;
// @Output() send = new EventEmitter<Ingredient>();
subscription : Subscription;
editIndex : number;
editMode : boolean = false;
editItem ;
add(form : NgForm){
  if(this.editMode){
    this.slService.ingredients[this.editIndex]= {
      name :this.ele.value.name,
      amount : this.ele.value.amount
  }
  this.ele.reset();
  this.editMode = false;
  }
  else{
    const ing = new Ingredient(form.value.name,form.value.amount);
    this.slService.ingredients.push(ing)
    this.ele.reset();
  }
}
constructor(private slService : ShoppingListService){

}
ngOnInit(): void {
    this.subscription = this.slService.startEdit.subscribe(
      (index: number)=>{
        this.editMode = true;
        this.editIndex = index;
        this.editItem = this.slService.getIngredients(index);
        this.ele.setValue({
          name : this.editItem.name,
          amount : this.editItem.amount
        })
      })
} 
clear(){
  this.ele.reset();
  this.editMode = false;
}
onDelete(){
  this.slService.ingredients.splice(this.editIndex,1)
  this.editMode = false;
  this.ele.reset();
}
}
