import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NationService } from '../../../services/game-state/nation.service';
import { NationalTrait, NationState } from '../../../interfaces/nation.interface';
import { firstValueFrom } from 'rxjs';
import { v6 as uuid } from 'uuid';
import { CustomizerBaseComponent } from '../../ui/customizer-base/customizer-base.component';
import { CustomizerContainerComponent } from "../customizer-container/customizer-container.component";
import { NationNameComponent } from '../../ui/form-fields/nation/nation-name/nation-name.component';
import { NationalTraitsComponent } from '../../ui/form-fields/nation/national-traits/national-traits.component';
import { NationalFocusFieldComponent } from '../../ui/form-fields/nation/national-focus/national-focus-field.component';

const formControlNames = [
  'nationName',
  'nationalTraits',
  'focusTrait1',
  'focusTrait2'
]

@Component({
  selector: 'app-customize-nation',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NationNameComponent, NationalTraitsComponent, NationalFocusFieldComponent, CustomizerContainerComponent, CustomizerContainerComponent],
  templateUrl: './customize-nation.component.html',
  styleUrl: './customize-nation.component.scss'
})
export class CustomizeNationComponent extends CustomizerBaseComponent {
  public readonly nationImageUrl: string = '../../../assets/images/cartographic-map-nation.png';
  public nationName: string = 'nationName';
  public nationalTraits: string = 'nationalTraits';
  public focusTrait1: string = 'focusTrait1';
  public focusTrait2: string = 'focusTrait2';

  private existingState!: NationState;

  constructor(private _nationService: NationService) {
    super(formControlNames);

    this._nationService.nationState$.subscribe(st => console.log(st));
  }
  
  protected override async patchFormValues() {
    this.existingState = await firstValueFrom(this._nationService.nationState$);
    !this.existingState?.id ?
      this.form.patchValue({ 'nationalTraits': this._nationService.nationalFocusOptions }) :
      this.form.patchValue({        
        'nationName': this.existingState.name,
        'nationalTraits': this.existingState.nationalTraits,
        'focusTrait1': this.existingState.focusTrait1,
        'focusTrait2': this.existingState.focusTrait2
      });
  }

  override submit() {
    const natState: NationState = {
      id: this.existingState?.id || uuid(),
      name: this.form.value.nationName,
      nationalTraits: (this.form.value.nationalTraits as Array<NationalTrait>).map(nt => ({ traitType: nt.traitType, weight: nt.weight })),
      focusTrait1: this.form.value.focusTrait1.traitType,
      focusTrait2: this.form.value.focusTrait2.traitType,
    };
    this._nationService.update(natState);
  }
}
