import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWindow]',
  exportAs: 'portal',
  standalone: true
})
export class WindowDirective {
  private readonly element!: HTMLElement;
  private readonly parent: any;
  private window: Window | null = null;

  private hostRef = inject(ElementRef);
  private renderer = inject(Renderer2);


  constructor() {

    this.element = this.hostRef.nativeElement;
    this.parent = this.renderer.parentNode(this.element);

    console.log(this.element)
    console.log(parent)
  }

  open() {
    console.log('open')
    this.window = window.open('', '', 'width=500, height=300');
    this.renderer.appendChild(this.window?.document?.body, this.element);
  }

  close() {
    console.log('close')
    this.renderer.appendChild(this.parent, this.element);
    this.window?.close();
  }

}
