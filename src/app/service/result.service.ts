import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Result {
  id: number;
  teamA: string;
  teamB: string;
  score: string;
  winner: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  //private apiUrl = 'http://localhost:8080/api/jaguar-hockey/article';
  apiUrl = 'https://rachidboughelam-api.onrender.com/api/jaguar-hockey/result';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Result[]> {
    return this.http.get<Result[]>(this.apiUrl);
  }
}
