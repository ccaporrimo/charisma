import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-field-base',
  standalone: true,
  templateUrl: './form-field-base.component.html',
  styleUrl: './form-field-base.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldBaseComponent),
      multi: true
    }
  ]
})
export abstract class FormFieldBaseComponent implements ControlValueAccessor {
  @Input() label!: string;

  abstract viewValue: any;

  onChange = () => {};
  onTouched = () => {};
  
  get value() {
    return this.viewValue;
  }

  set value(val) {
    this.viewValue = val;
  }
  
  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    
  }
}
