import {Directive, HostListener, HostBinding, Input, ElementRef, Renderer2} from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
   @Input('appDropdown') element: ElementRef;
   
   constructor(private renderer: Renderer2) {}
   private isOpen = false;
 
   @HostListener('click') toggleOpen() {
     this.isOpen = !this.isOpen;
     if(this.isOpen) {
       this.renderer.addClass(this.element, 'show');
     } else {
       this.renderer.removeClass(this.element, 'show');
     }
   }
    
    // toggle : boolean = false;

    // constructor(private ele: ElementRef, private ren:Renderer2){

    // }

    // @HostListener('click') dropdown(){
    //     console.log('clicked')
    //     if(this.toggle==false){
    //         this.ren.addClass(this.ele.nativeElement ,'show')
    //         this.toggle = true;
    //         console.log('tog true')
    //     }
    //     else{
    //         this.ren.removeClass(this.ele.nativeElement , 'show')
    //         this.toggle = false;
    //         console.log('tog false')
    //     }
    // }
}