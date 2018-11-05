import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
    <h1>{{pageTitle}}</h1><br>
    <pm-products></pm-products>
  </div>`
})

export class AppComponent {
  pageTitle = 'Angular Startup Project';
  bodyTitle = 'this is the body of our components';
}
