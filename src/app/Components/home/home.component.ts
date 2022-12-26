import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeData$ = this._SharedService.getHomePageData().pipe(
    map((res: any) => res.data)
  );
  constructor(private _SharedService: SharedService) { 
    
  }

  ngOnInit(): void {
  }

}
