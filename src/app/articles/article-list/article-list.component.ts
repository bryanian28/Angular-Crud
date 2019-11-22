import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/articles.service';
import { Article } from 'src/app/shared/article.model';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private service: ArticleService) { }
  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(listArticles: Article) {
    this.service.formData = Object.assign({}, listArticles);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteArticle(id).subscribe(res => {
        this.service.refreshList();
       alert('Deleted successfully');
      });
    }
  }

}
