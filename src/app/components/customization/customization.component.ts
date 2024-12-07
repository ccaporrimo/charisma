import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customization',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.scss'
})
export class CustomizationComponent {

}
