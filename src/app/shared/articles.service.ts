import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  formData: Article;
  list: Article[];
  readonly rootURL ="http://localhost:3000/api/v1"

  constructor(private http: HttpClient) { }

  postArticle(formData: Article) {
   return this.http.post(this.rootURL + '/articles', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/articles')
    .toPromise().then(res => this.list = res as Article[]);
  }

  putArticle(formData: Article) {
    return this.http.patch(this.rootURL + '/articles/' + formData.id, formData);

   }

   deleteArticle(id: number) {
    return this.http.delete(this.rootURL + '/articles/' + id);
   }
}
