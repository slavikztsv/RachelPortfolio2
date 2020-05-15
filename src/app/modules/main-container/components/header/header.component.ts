import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems = [
    { name: 'HOME', id: 'home', route: '/home' },
    { name: 'ABOUT ME', id: 'about-me', route: '/about-me' },
    { name: 'CONTACT', id: 'contact', route: '/contact' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
