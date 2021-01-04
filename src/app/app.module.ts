import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import {
  ThemeUtilModule,
  ThemeUtilService,
} from "../../dist/material-theme-util";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ThemeUtilModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [ThemeUtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
