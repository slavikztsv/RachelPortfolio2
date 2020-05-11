import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems = [
    { name: 'Home', id: 'home', route: '/home' },
    { name: 'About Me', id: 'about-me', route: '/about-me' },
    { name: 'Contact', id: 'contact', route: '/contact' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
