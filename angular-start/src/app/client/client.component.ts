import { formatCurrency } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    selector : "client-component",
    templateUrl : "./client.component.html",
    styleUrls : ["./client.component.css"]
})

export class clientComponent {
    name1:string = "";
    yn : boolean;
    rd : boolean;
    ar : string[] = ['abc','xyz','pqr']
    constructor(){
        if(this.name1.length<1){
            this.yn = true;
        }
        else if(this.name1.length>0){
            this.yn = false;
        }
        
    }
    name(event){
        this.name1 = event.target.value;
        if(event.target.value.length<1){
            this.yn = true;
        }
        else if(event.target.value.length>0){
            this.yn = false;
        }
    }
    say(){
        
        this.ar.push(this.name1)
        
    }

    color(){
        if (this.name1.length >4){
            return "red";
        }
        else{
            return "orange";
        }
    }
    rnd(){
        if(Math.random()>0.5){
            return true;
        }
        else{
            return false;
        }
    }
}