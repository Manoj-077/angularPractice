import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-start';
  greet:string = "hi";
  
  constructor(){
    setInterval(()=>{this.greet="this is hello"},3000)
    this.greet = "hi"
  }
  say = "this isn chrome";
}
