import { Component } from '@angular/core';
import { FormFieldBaseComponent } from '../../form-field-base/form-field-base.component';
import { FormsModule } from '@angular/forms';
import { NationalFocus } from '../../../../../interfaces/nation.interface';
import { NationService } from '../../../../../services/game-state/nation.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-national-focus',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './national-focus-field.component.html',
  styleUrls: ['../../form-field-base/form-field-base.component.scss']
})
export class NationalFocusFieldComponent extends FormFieldBaseComponent<NationalFocus> {

  constructor(private _nationState: NationService) {
    super();
  }

  public focusOptions = this._nationState.nationalFocusOptions;
}
