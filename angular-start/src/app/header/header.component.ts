import { Component, EventEmitter, Output } from "@angular/core"

@Component({
    selector : 'header-component',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css'] 
})
export class headerComponent{
  @Output() rEvent = new EventEmitter();
  @Output() lEvent = new EventEmitter();
  r : boolean = true;
  l : boolean = true;
    showRecipes(){
        this.rEvent.emit()
        
    }
    showSList(){
        this.lEvent.emit();
    }
    
}