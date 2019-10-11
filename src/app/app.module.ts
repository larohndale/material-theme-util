import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ThemeUtilModule, ThemeUtilService } from 'mat-theme-util';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThemeUtilModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    ThemeUtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
