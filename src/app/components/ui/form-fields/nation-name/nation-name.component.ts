import { Component } from '@angular/core';
import { FormFieldBaseComponent } from '../form-field-base/form-field-base.component';

@Component({
  selector: 'app-nation-name',
  standalone: true,
  imports: [],
  templateUrl: './nation-name.component.html',
  styleUrl: './nation-name.component.scss'
})
export class NationNameComponent extends FormFieldBaseComponent {
  override viewValue: any;
}
