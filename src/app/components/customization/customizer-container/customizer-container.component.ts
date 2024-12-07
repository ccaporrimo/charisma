import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customizer-container',
  standalone: true,
  imports: [],
  templateUrl: './customizer-container.component.html',
  styleUrl: './customizer-container.component.scss'
})
export class CustomizerContainerComponent {
  @Input() public imageUrl!: string;
  @Input() public pageTitle!: string;
  @Input() public subtitle!: string;

  @Output() public submitEvent: EventEmitter<void> = new EventEmitter<void>();
}
