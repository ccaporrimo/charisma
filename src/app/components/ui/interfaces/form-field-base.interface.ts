import { FormControlName } from "@angular/forms";
import { IHasName } from "./has-name.interface";

export interface IFormFieldBase extends IHasName {
    formControlNameDirective: FormControlName;
}