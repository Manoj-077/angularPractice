import { Directive, ElementRef, Renderer2 , HostListener, ViewChild , AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDropdownh]'
})
export class DropdownhDirective implements AfterViewInit{
 @ViewChild("add") s : ElementRef;
  toggle : boolean = false;

    constructor(){
      
    }
    ngAfterViewInit(): void {
      console.log(this.s.nativeElement)
    }

    @HostListener('click') dropdown(){
        console.log('clicked')
       
        if(this.toggle==false){
            this.s.nativeElement.addClass('show')
            
            this.toggle = true;
            console.log('tog true')
        }
        else{
            this.s.nativeElement.removeClass('show')
            
            this.toggle = false;
            console.log('tog false')
        }
    }

}
