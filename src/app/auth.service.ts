import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = "http://localhost:8080/login";
  constructor(private http: HttpClient) { }
  login(username: String, password: String): Observable<any> {
    return this.http.post<any>(this.apiUrl, {username, password});
  }
}