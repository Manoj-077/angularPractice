import { Component } from "@angular/core"

@Component({
    selector : "server-component",
    templateUrl : "./server.component.html",
    styleUrls: ["./server.component.css"]
})

export class serverComponent{
btnboolean: boolean = true;
click: boolean;
name:string = ""; 
h:string  
constructor(){
    
    // setTimeout(()=> {this.btnboolean=false;
    // this.tell = "now click";
    // this.h = "heya"   } , 6000)
    // setTimeout(()=> { this.tell = ""} , 8000)
    if(this.name.length < 1){
        this.click = true;
    }
    
}

onClickM(){
    alert("hi "+this.name)
}

inPutName(event){
   this.name = event.target.value;  
   this.click = false 
   if(this.name.length < 1){
    this.click = true;
   }
   else{
    this.click = false;
   }
}

}