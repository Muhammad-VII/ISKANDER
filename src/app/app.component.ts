import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _SpinnerService: NgxSpinnerService, public _Router: Router) {}
  title = 'ISKANDER';

  ngOnInit(): void {
    this._SpinnerService.show();
    window.onload = () => {
      this._SpinnerService.hide()
    }
  }

  onActivate() {
    window.scroll(0,0);
  }
}
