
import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('nameInput') name : ElementRef;
@ViewChild('amountInput') amount : ElementRef ;
@Output() send = new EventEmitter<Ingredient>();
add(){
  const nm = this.name.nativeElement.value;
  const am = this.amount.nativeElement.value;
  const ing = new Ingredient(nm,am);
  this.send.emit(ing);
}

}
