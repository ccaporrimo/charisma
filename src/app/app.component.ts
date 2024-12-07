import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomizeNationComponent } from './components/customization/customize-nation/customize-nation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomizeNationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'charisma';
}
