import { NgComponentOutlet, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';

export interface CustomizerFormField {
  formControl: FormControl;
  component: Type<Component>
}

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, NgComponentOutlet],
  templateUrl: './customizer.component.html',
  styleUrl: './customizer.component.scss'
})
export class CustomizerComponent implements OnInit, AfterViewInit {
  @Input() formFields: CustomizerFormField[] = [];

  public formComponents: any[] = [];

  public customizerForm!: FormGroup;

  ngOnInit(): void {
    this.formComponents = this.formFields?.map(ff => ff.component);
  }

  ngAfterViewInit(): void {
    if (!this.formFields?.length) return;

    this.customizerForm = new FormGroup(this.formFields.map(ff => ff.formControl));
  }
}
