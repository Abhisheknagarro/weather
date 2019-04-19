import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputcityComponent } from './inputcity/inputcity.component';
import { DisplayweatherComponent } from './displayweather/displayweather.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DisplaycurrentweatherComponent } from './displaycurrentweather/displaycurrentweather.component';

@NgModule({
  declarations: [
    AppComponent,
    InputcityComponent,
    DisplayweatherComponent,
    HeaderComponent,
    FooterComponent,
    DisplaycurrentweatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
