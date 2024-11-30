import { Component } from '@angular/core';
import { CustomizerComponent, CustomizerFormField } from '../ui/customizer/customizer.component';
import { NationNameComponent } from '../ui/form-fields/nation/nation-name/nation-name.component';
import { FormControl } from '@angular/forms';
import { NationalFocusFieldComponent } from '../ui/form-fields/nation/national-focus/national-focus-field.component';

@Component({
  selector: 'app-customize-nation',
  standalone: true,
  imports: [CustomizerComponent],
  templateUrl: './customize-nation.component.html',
  styleUrl: './customize-nation.component.scss'
})
export class CustomizeNationComponent { 
  public readonly nationImageUrl: string = '../../../assets/images/cartographic-map-nation.png';

  public readonly formFields: CustomizerFormField[] = [
    {
      component: NationNameComponent,
      formControl: new FormControl('nationName'),
      label: 'Nation'
    },
    {
      component: NationalFocusFieldComponent,
      formControl: new FormControl('nationalFocus1'),
      label: 'Primary National Focus'
    },
    {
      component: NationalFocusFieldComponent,
      formControl: new FormControl('nationalFocus2'),
      label: 'Secondary National Focus'
    }
  ]

  constructor() {
    console.log('Customize Nation constructor');
  }
}
