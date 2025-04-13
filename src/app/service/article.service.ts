import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Article {
  id: null;
  title: string;
  description: string;
  date: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://192.168.2.15:8080/api/jaguar-hockey/article';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  addArticle(article: Article) {
    return this.http.post<Article>(`${this.apiUrl}/article`, article);
  }
  

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
