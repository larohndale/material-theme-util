import { NgModule } from "@angular/core";
import { PalettePickerComponent } from "./palette-picker.component";
import { ColorPickerComponent } from "./color-picker/color-picker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

const COMPONENTS = [PalettePickerComponent, ColorPickerComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: COMPONENTS,
})
export class ThemeUtilModule {}
