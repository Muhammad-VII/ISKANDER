import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  lang: string = localStorage.getItem('lang')! ?? 'due';

  constructor(private _HttpClient: HttpClient) { }

  sendContactForm(contactForm: {}): Observable<any> {
    return this._HttpClient.post(`${environment.apiUrl}/contact/addMessage`, contactForm)
  }

  getHomePageData(): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/home/getAllSections-${this.lang}?limit=10&skip=0`)
  }

  getWasWirSindPageData(): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/war-wir-sind/getAllSections-${this.lang}?limit=10&skip=0`)
  }

  getWasWirTunPageData(): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/war-wir-tun/getAllSections-${this.lang}?limit=10&skip=0`)
  }
}
