import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeData: any[] = [];
  constructor(private _SharedService: SharedService) { 
    this._SharedService.getHomePageData().subscribe((res: any) => {
      this.homeData = res.data;
      console.log(res.data);
    })
  }

  ngOnInit(): void {
  }

}
