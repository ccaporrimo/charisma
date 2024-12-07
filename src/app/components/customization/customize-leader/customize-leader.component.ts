import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomizerContainerComponent } from "../customizer-container/customizer-container.component";

@Component({
  selector: 'app-customize-leader',
  standalone: true,
  imports: [CustomizerContainerComponent],
  templateUrl: './customize-leader.component.html',
  styleUrl: './customize-leader.component.scss'
})
export class CustomizeLeaderComponent {
  public readonly imageUrl: string = '/assets/images/leader_image.jpg';

  submit() {}
}
