import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';


@NgModule({
  declarations: [AppComponent, ProductListComponent], // our components
  imports: [BrowserModule, FormsModule], // angular itself or 3rd parties
  bootstrap: [AppComponent]
})

export class AppModule { }
