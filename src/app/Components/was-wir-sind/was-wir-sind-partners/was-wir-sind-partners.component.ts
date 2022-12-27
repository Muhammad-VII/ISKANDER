import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-was-wir-sind-partners',
  templateUrl: './was-wir-sind-partners.component.html',
  styleUrls: ['./was-wir-sind-partners.component.scss']
})
export class WasWirSindPartnersComponent {
  @Input() data: any;
  lang: string = localStorage.getItem('lang')! ?? 'due';

}
