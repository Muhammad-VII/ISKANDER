import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  lang: string = localStorage.getItem('lang')! ?? 'due';

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
