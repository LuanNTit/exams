import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {
  title = "default"
  @Input() isLoggedIn?: boolean;
  
}