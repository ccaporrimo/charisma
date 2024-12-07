import { Component, forwardRef } from '@angular/core';
import { FormFieldBaseComponent } from '../../form-field-base/form-field-base.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NationalTraitData } from '../../../../../interfaces/nation.interface';
import { NationService } from '../../../../../services/game-state/nation.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-national-focus',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './national-focus-field.component.html',
  styleUrls: ['../../form-field-base/form-field-base.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NationalFocusFieldComponent),
      multi: true
    }
  ]
})
export class NationalFocusFieldComponent extends FormFieldBaseComponent<NationalTraitData> {
  public static override label: string = 'National Focus';

  constructor(private _nationState: NationService) {
    super();
  }

  override writeValue(obj: any): void {
    this.value = this.focusOptions.find(fo => fo.traitType === obj) ?? obj;
  }

  public focusOptions = this._nationState.nationalFocusOptions;

}
