import { Directive, ElementRef, OnChanges } from '@angular/core';

@Directive({selector: '[contentEditable][placeholder]'})
export class ContentEditablePlaceholderDirective implements OnChanges {
  constructor(protected element: ElementRef) {
  }

  public ngOnChanges() {

  }
}
