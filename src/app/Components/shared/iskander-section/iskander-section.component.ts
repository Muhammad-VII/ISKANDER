import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iskander-section',
  templateUrl: './iskander-section.component.html',
  styleUrls: ['./iskander-section.component.scss']
})
export class IskanderSectionComponent {
  @Input() data: any;
}
