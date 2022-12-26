import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _SharedService: SharedService) { 
    this._SharedService.getHomePageData().subscribe((res: any) => {
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
