import { map } from 'rxjs';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'was-wir-sind',
  templateUrl: './was-wir-sind.component.html',
  styleUrls: ['./was-wir-sind.component.scss']
})
export class WasWirSindComponent implements OnInit {
  wasWirSindData$ = this._SharedService.getWasWirSindPageData().pipe(
    map((res: any) => res.data)
  );
  constructor(private _SharedService: SharedService) { 
    
  }

  ngOnInit(): void {
  }

}
