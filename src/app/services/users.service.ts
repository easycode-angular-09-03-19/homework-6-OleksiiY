import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getUserById(id: string) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }
}
