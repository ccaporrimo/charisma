import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-field-base',
  standalone: true,
  templateUrl: './form-field-base.component.html',
  styleUrl: './form-field-base.component.scss',
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldBaseComponent),
      multi: true
    }
  ]
})
export class FormFieldBaseComponent<T> implements ControlValueAccessor {
  @Input() label!: string;

  public viewValue!: T;

  onChange = () => {};
  onTouched = () => {};
  
  get value() {
    return this.viewValue;
  }

  set value(val) {
    this.viewValue = val;
  }
  
  writeValue(obj: T): void {
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
