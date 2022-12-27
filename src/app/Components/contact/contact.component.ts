import { map } from 'rxjs';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lang: string = localStorage.getItem('lang')! ?? 'due';

  constructor(private _SharedService: SharedService) {

  }

  contactPageData$ = this._SharedService.getContactPageData().pipe(
    map((res: any) => res.data[0])
  );

  ngOnInit(): void {

  }

}
