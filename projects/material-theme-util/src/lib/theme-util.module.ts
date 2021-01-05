import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { PalettePickerComponent } from "./palette-picker.component";
import { ColorPickerComponent } from "./color-picker/color-picker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [PalettePickerComponent, ColorPickerComponent],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [PalettePickerComponent, ColorPickerComponent],
})
export class ThemeUtilModule {}
