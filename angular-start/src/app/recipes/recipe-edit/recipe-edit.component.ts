import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('f') ele: NgForm;
 id: number;
 editMode = false;
 constructor(private route: ActivatedRoute){
 }
 ngOnInit(){
  this.route.params.subscribe((params:Params)=>
  { this.id = +params['id'];
    this.editMode = params['id'] != null;

    console.log(this.editMode);
    console.log(this.id);
    
  })  
 }
 onSubmit(form){
  if(this.editMode){

  }
 }

}
