import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
// Načítáme moduly z Angular knihovny:
// - Directive: Používá se k definici vlastní direktivy.
// - ElementRef: Poskytuje přístup k HTML elementu, ke kterému je direktiva připojena.
// - HostListener: Umožňuje "poslouchat" události na prvku, ke kterému je direktiva připojena.
// - Input: Umožňuje předat hodnotu do vlastnosti direktivy.
// - Renderer2: Poskytuje bezpečné API pro manipulaci s DOM elementy (např. změna stylů nebo atributů).

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
// Definujeme novou direktivu pomocí @Directive dekorátoru:
// - selector: '[appHighlight]' říká Angularu, že tato direktiva bude použita na elementy s atributem 'appHighlight'.
// - standalone: true říká, že direktiva je nezávislá, což usnadňuje její použití v samostatných komponentech.
export class HighlightDirective {
  @Input({ required: true }) highlightColor!: string; // Povinný vstup (input) pro definici barvy zvýraznění

  // Konstruktor inicializuje dvě součásti:
  // - el: Poskytuje přímý přístup k DOM elementu, na kterém je direktiva aplikována.
  // - renderer: Umožňuje manipulaci s DOM bezpečným způsobem.
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    // @HostListener slouží k naslouchání událostem, zde události 'mouseenter':
    // - 'mouseenter' se spustí, když uživatel najede kurzorem myši na element.
    // - Funkce onMouseEnter zavolá metodu setHighlight s barvou uloženou v highlightColor.
    this.setHighlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Další @HostListener, který poslouchá událost 'mouseleave':
    // - 'mouseleave' se spustí, když uživatel opustí kurzorem myši element.
    // - Funkce onMouseLeave zavolá metodu setHighlight s hodnotou null, což resetuje barvu pozadí.
    this.setHighlight(null);
  }

  private setHighlight(color: string | null) {
    // Metoda setHighlight upravuje barvu pozadí elementu pomocí rendereru:
    // - renderer.setStyle použije CSS styl na element. První argument je element,
    //   druhý je název stylu ('backgroundColor') a třetí je hodnota (zde barva nebo null).
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
