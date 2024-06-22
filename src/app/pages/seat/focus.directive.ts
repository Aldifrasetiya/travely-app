import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.el.nativeElement.focus();
  }
}