import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseover') mouseover(eventData: Event) {
    if (this.element.nativeElement.id === 'type') {
      this.underline('underline');
    }
    if (this.element.nativeElement.id === 'tag') {
      this.bold('bold');
    }
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    if (this.element.nativeElement.id === 'type') {
      this.underline('none');
    }
    if (this.element.nativeElement.id === 'tag') {
      this.bold('normal');
    }
  }

  underline(type: string) {
    this.element.nativeElement.style.textDecoration = type || 'type';
  }

  bold(tag: string) {
    this.element.nativeElement.style.fontWeight = tag || 'bold';
  }



}
