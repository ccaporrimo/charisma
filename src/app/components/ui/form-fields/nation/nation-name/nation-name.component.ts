import { Component, forwardRef } from '@angular/core';
import { FormFieldBaseComponent } from '../../form-field-base/form-field-base.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DynamicFormControlDirective } from '../../../../../directives/dynamic-form-control.directive';

@Component({
  selector: 'app-nation-name',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nation-name.component.html',
  styleUrl: './nation-name.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NationNameComponent),
      multi: true
    }
  ]
})
export class NationNameComponent extends FormFieldBaseComponent<string> {
  public static override label = 'Nation';
}
