import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 r : boolean = false;
 l : boolean = false;
  rlistened(){
    this.r = true;
    this.l = false;
    
  }
  llistened(){
    this.l = true;
    this.r = false;
  }
}
