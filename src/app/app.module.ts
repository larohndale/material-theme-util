import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  ThemeUtilModule,
  ThemeUtilService,
} from "../../dist/material-theme-util";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ThemeUtilModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ThemeUtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
