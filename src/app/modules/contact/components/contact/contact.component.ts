import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public isSent: boolean;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.isSent = false;
  }

  // public sendEmail(e: Event, form: NgForm) {
  //   // e.preventDefault();
  //   emailjs.sendForm('gmail', 'template_dhB8gU8F', e.target as HTMLFormElement, 'user_n2rFoe0jliKCtqueoGcZV')
  //     .then((result: EmailJSResponseStatus) => {
  //       console.log(result.text);
  //       this.isSent = true;
  //       form.resetForm();
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }

}
