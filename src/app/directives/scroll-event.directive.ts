import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrollEvent]',
  standalone: true
})
export class ScrollEventDirective {

  constructor() { }

  private isScrolling = false;

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    if (this.isScrolling) return;

    const target = event.target as HTMLElement;
    const sections = Array.from(target.children) as HTMLElement[];
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const offsetHeight = target.offsetHeight;

    const index = sections.findIndex((section) =>
      scrollTop < section.offsetTop + section.offsetHeight
    );

    const nextSection = scrollTop + offsetHeight >= scrollHeight
      ? null
      : sections[index];

    if (nextSection) {
      this.isScrolling = true;
      nextSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => (this.isScrolling = false), 500);
    }
  }
}
