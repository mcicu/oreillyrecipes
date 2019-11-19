import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.elementRef.nativeElement.classList.add('show');
    this.elementRef.nativeElement.getElementsByClassName('dropdown-menu')[0].classList.add('show');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.elementRef.nativeElement.classList.remove('show');
    this.elementRef.nativeElement.getElementsByClassName('dropdown-menu')[0].classList.remove('show');
  }
}
