import { Directive, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Directive({
  selector: '[appDynamicFormControl]',
  standalone: true,
  providers: [ReactiveFormsModule]
})
export class DynamicFormControlDirective implements OnInit {

  @Input('appDynamicFormControl') controlName!: string;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    const control = this.controlContainer.control?.get(this.controlName) as FormControl;
    !!control && control.setValue(this.controlName);
  }
}
