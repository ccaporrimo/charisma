import { Component } from '@angular/core';
import { CustomizerComponent, CustomizerFormField } from '../ui/customizer/customizer.component';
import { NationNameComponent } from '../ui/form-fields/nation-name/nation-name.component';
import { FormControl } from '@angular/forms';

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
      formControl: new FormControl('nationName')
    }
  ]

  constructor() {
    console.log('Customize Nation constructor');
  }
}
