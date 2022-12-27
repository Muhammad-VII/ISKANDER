import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  lang: string = localStorage.getItem('lang')! ?? 'due';

  @Input() data: any;
}
