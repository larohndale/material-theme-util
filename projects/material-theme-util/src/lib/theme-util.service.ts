import { Directive, Injectable } from "@angular/core";
import { Theme } from "../globalizer/theme-utils/theme.model";
@Directive()
@Injectable({
  providedIn: "root",
})
export class ThemeUtilService {
  public colorTheme: Theme;

  public initTheme(primary?: string, accent?: string, warn?: string) {
    this.colorTheme = new Theme(primary, accent, warn);
  }

  public setPrimaryPalette(str: string) {
    this.colorTheme.setPrimary(str);
  }

  public setAccentPalette(str: string) {
    this.colorTheme.setAccent(str);
  }

  public setWarnPalette(str: string) {
    this.colorTheme.setWarn(str);
  }
}
