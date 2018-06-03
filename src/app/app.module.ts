import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PaymentService} from './shared/payment.service';
import {KeysPipe} from './shared/keys.pipe';
import {IntegerPipe} from './shared/integer.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    KeysPipe,
    IntegerPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
