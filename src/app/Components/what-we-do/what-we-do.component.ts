import { map } from 'rxjs';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {
  whatWeDoData$ = this._SharedService.getWasWirTunPageData().pipe(
    map((res: any) => res.data)
  );
  constructor(private _SharedService: SharedService) { }

  ngOnInit(): void {
  }

}
