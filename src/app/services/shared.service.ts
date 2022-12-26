import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _HttpClient: HttpClient) { }

  sendContactForm(contactForm: {}): Observable<any> {
    return this._HttpClient.post(`${environment.apiUrl}/contact/addMessage`, contactForm)
  }
}
