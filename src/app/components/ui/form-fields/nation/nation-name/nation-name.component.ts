import { Component } from '@angular/core';
import { FormFieldBaseComponent } from '../../form-field-base/form-field-base.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nation-name',
  standalone: true,
  imports: [FormFieldBaseComponent, FormsModule],
  templateUrl: './nation-name.component.html',
  styleUrl: './nation-name.component.scss'
})
export class NationNameComponent extends FormFieldBaseComponent<string> {
  
}
