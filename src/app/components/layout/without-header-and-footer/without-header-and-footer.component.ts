import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-without-header-and-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './without-header-and-footer.component.html',
  styleUrl: './without-header-and-footer.component.scss'
})
export class WithoutHeaderAndFooterComponent {

}
