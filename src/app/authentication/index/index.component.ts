import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
