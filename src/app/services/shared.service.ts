import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  lang: string = localStorage.getItem('lang')! ?? 'due';

  constructor(private _HttpClient: HttpClient) { 
    if (this.lang == 'ar') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }
    document.querySelector('html')?.setAttribute('lang', this.lang);
  }

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

  getContactPageData(): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/contact-page/getAllSections-${this.lang}?limit=10&skip=0`)
  }

  getAllLangs(): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/settings/getAllLangueges`)
  }

  getWhatWeDoDetails(id: string): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/war-wir-tun/getSectionById-${this.lang}/${id}`)
  }
}
