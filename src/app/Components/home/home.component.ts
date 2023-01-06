import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeData$ = this._SharedService
    .getHomePageData()
    .pipe(map((res: any) => res.data));

  wasWirTunData$ = this._SharedService
    .getWasWirTunPageData()
    .pipe(map((res: any) => {
      return res.data.splice(0, 3)
    }))

  constructor(private _SharedService: SharedService) {

  }

  ngOnInit(): void {}
}
