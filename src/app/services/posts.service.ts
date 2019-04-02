import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPostByUserId(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/posts?userId=${id}`);
  }
  editUserItem(userItem: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/posts/${userItem.id}`, userItem);
  }
}
