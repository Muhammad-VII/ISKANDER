import { catchError, map, Observable } from 'rxjs';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-what-we-do-details',
  templateUrl: './what-we-do-details.component.html',
  styleUrls: ['./what-we-do-details.component.scss'],
})
export class WhatWeDoDetailsComponent implements OnInit {
  lang: string = localStorage.getItem('lang')! ?? 'due';

  constructor(private _ActivatedRoute: ActivatedRoute, private _SharedService: SharedService, private _Router:Router) {}
  
  pageContent$:Observable<any> = this._SharedService.getWhatWeDoDetails(this._ActivatedRoute.snapshot.params['id']).pipe(
    map((res: any) => {
      return res.data;
    }),
    catchError((err) => {
      this._Router.navigate(['/']);
      throw err;
    })
  )

  ngOnInit(): void {
    
  }
}
