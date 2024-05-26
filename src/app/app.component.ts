import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showLecturerBoard = false;
  showStudentBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      console.log(this.roles);

      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showLecturerBoard = this.roles.includes('LECTURER');
      this.showStudentBoard = this.roles.includes('STUDENT');
      this.username = user.sub;

    }
  }

  logout(): void {
    debugger
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
