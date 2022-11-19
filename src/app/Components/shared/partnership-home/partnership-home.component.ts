import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partnership-home',
  templateUrl: './partnership-home.component.html',
  styleUrls: ['./partnership-home.component.scss']
})
export class PartnershipHomeComponent {
  @Input()
  bgColor: boolean = false
}
