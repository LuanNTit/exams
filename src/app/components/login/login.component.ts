import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // authService: AuthService = inject(AuthService);
  private apiUrl = "http://localhost:8080/login";
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor() {

  }
  submitLogin() {
    // debugger
    // this.authService.login(
    //   this.loginForm.value.username ?? '',
    //   this.loginForm.value.password ?? ''
    // );
  }
}
