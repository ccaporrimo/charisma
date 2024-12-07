import { Component, forwardRef, Inject, InjectionToken, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControlName, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { IFormFieldBase } from '../../interfaces/form-field-base.interface';

export const CONTROL_NAME = new InjectionToken<string>('app.control.name');

@Component({
  selector: 'app-form-field-base',
  standalone: true,
  templateUrl: './form-field-base.component.html',
  styleUrl: './form-field-base.component.scss',
  imports: [FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldBaseComponent),
      multi: true
    }
  ]
})
export abstract class FormFieldBaseComponent<T> implements ControlValueAccessor, IFormFieldBase {
  @Input() name!: string;
  @ViewChild(FormControlName) public formControlNameDirective!: FormControlName;

  static label: string;
  public viewValue!: T;  

  onChange: any = () => {};
  onTouched: any = () => {};
  
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

  changed(): void {
    this.onChange(this.value);
  }
  
  setDisabledState?(isDisabled: boolean): void {
    
  }
}
