import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NationalTraitData } from '../../../interfaces/nation.interface';
import { MatSliderModule } from '@angular/material/slider';
import { NgIf } from '@angular/common';
import { IHasIsEditing } from '../interfaces/has-is-editing.interface';
import { FormFieldBaseComponent } from '../form-fields/form-field-base/form-field-base.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-national-trait',
  standalone: true,
  imports: [NgIf, MatSliderModule, FormsModule],
  templateUrl: './national-trait.component.html',
  styleUrl: './national-trait.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NationalTraitComponent),
      multi: true
    }
  ]
})
export class NationalTraitComponent extends FormFieldBaseComponent<NationalTraitData> implements IHasIsEditing {
  @Input() isEditing: boolean = false;
}
