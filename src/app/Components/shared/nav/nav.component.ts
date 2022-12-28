import { Observable, map } from 'rxjs';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private _SharedService: SharedService) { }
  lang: string = localStorage.getItem('lang')! ?? 'due';
  langueges$: Observable<any> = this._SharedService.getAllLangs().pipe(
    map((res: any) => {
      return res.data;
    })
  );

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
