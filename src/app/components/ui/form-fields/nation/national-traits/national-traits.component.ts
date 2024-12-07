import { Component, forwardRef } from '@angular/core';
import { NationalTraitData } from '../../../../../interfaces/nation.interface';
import { FormFieldBaseComponent } from '../../form-field-base/form-field-base.component';
import { NationService } from '../../../../../services/game-state/nation.service';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NationalTraitComponent } from "../../../national-trait/national-trait.component";

export interface NationalTraits {
  diplomacy: NationalTraitData;
  culture: NationalTraitData;
  law: NationalTraitData;
  military: NationalTraitData;
  economics: NationalTraitData;
  espionage: NationalTraitData;
}

@Component({
  selector: 'app-national-traits',
  standalone: true,
  imports: [FormsModule, NgFor, NationalTraitComponent],
  templateUrl: './national-traits.component.html',
  styleUrl: './national-traits.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NationalTraitsComponent),
      multi: true
    }
  ]
})
export class NationalTraitsComponent extends FormFieldBaseComponent<NationalTraits> {
  public static override label = 'National Traits';  

  constructor(private _nationService: NationService) {
    super();
  }

  public readonly traits = this._nationService.nationalFocusOptions;
}
