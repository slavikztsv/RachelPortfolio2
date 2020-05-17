import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpHeaders: HttpHeaders;
  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/vnd.pageclip.v1+json'
    });
  }

  sendContactForm(contactForm: any) {
    this.http.post('https://send.pageclip.co/UxrlcWO7GRgrLdOGKEQWrHXH85IkoSIN/contact-form',
        contactForm,
        {headers: this.httpHeaders})
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
