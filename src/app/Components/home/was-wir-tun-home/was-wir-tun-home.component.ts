import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-was-wir-tun-home',
  templateUrl: './was-wir-tun-home.component.html',
  styleUrls: ['./was-wir-tun-home.component.scss']
})
export class WasWirTunHomeComponent {
  @Input() data: any;
  @Input() homeData: any;
  lang: string = localStorage.getItem('lang')! ?? 'due';
  constructor() { 
  }

}
