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
      // 'Accept': 'application/vnd.pageclip.v1+json',
      // 'Authorization': 'fe422ae1eaeaf352410ee1b21feec3bb'
    });
  }

  sendContactForm(contactForm: any) {
    this.http.post('https://api.emailjs.com/api/v1.0/email/send',
        contactForm,
        {headers: this.httpHeaders}
        )
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
