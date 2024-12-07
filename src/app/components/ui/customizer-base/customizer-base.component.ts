import { NgComponentOutlet, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, inject, Inject, INJECTOR, Injector, Input, OnInit, QueryList, Type, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CONTROL_NAME, FormFieldBaseComponent } from '../form-fields/form-field-base/form-field-base.component';
import { IFormFieldBase } from '../interfaces/form-field-base.interface';
import { filter, take } from 'rxjs';

export interface ICustomizerFormField {
  formControlName: string;
  component: Type<IFormFieldBase>;
  label: string;
}

export class CustomizerFormField implements ICustomizerFormField {
  public readonly formControlName!: string;
  public injector!: Injector;

  public component!: Type<IFormFieldBase>;
  public label!: string;
  private readonly parentInjector = inject(Injector);

  constructor(field: ICustomizerFormField) {
    this.formControlName = field.formControlName;
    this.component = field.component;
    this.label = field.label;
  }
}

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: ''
})
export abstract class CustomizerBaseComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public formComponentsByName: Map<string, IFormFieldBase> = new Map();

  @ViewChildren('formComponent') formComponents!: QueryList<IFormFieldBase>;

  constructor(@Inject(String) private formControlNames: string[]) {
    this.initForm();
  }

  ngOnInit(): void {
    this.patchFormValues();
  }

  protected patchFormValues() { console.log('CustomizerBaseComponent: patchFormValues not implemented'); }

  protected submit() { console.log('CustomizerBaseComponent: submit not implemented') }

  private initForm() {
    this.formControlNames.forEach(fcn => this.createControl(fcn));
  }

  private createControl(name: string) {
    const control = new FormControl(null);
    this.form.addControl(name, control);
  }

  protected getComponentByControlName(name: string) {
    if (!this.formComponents?.length) return;

    return this.formComponents.toArray().find(fc => fc.formControlNameDirective?.name === name);
  }
}
