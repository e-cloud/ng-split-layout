import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'demo-map',
  template: 'Map',
  styles: [`
    demo-map {
      display: block;
    }
  `]
})
export class MapComponent {
  @HostListener('layoutresize') onlayoutresize() {
    console.log('bubbled')
  }
}
