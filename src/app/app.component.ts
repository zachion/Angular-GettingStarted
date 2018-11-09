import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' (click)='ngMenuClick($event)' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' (click)='ngMenuClick($event)' [routerLink]="[ '/products']">Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent {
  pageTitle = 'Angular Startup Project';
  bodyTitle = 'this is the body of our components';
  ngMenuClick(event): void {
    console.log(`clicked ${event.currentTarget.text}`);
  }
}
