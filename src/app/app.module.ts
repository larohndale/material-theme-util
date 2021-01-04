import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ThemeUtilService } from "../../projects/material-theme-util/src/lib/theme-util.service";
import { ThemeUtilModule } from "../../projects/material-theme-util/src/lib/theme-util.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ThemeUtilModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [ThemeUtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
