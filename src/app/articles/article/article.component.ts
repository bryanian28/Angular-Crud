import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/articles.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private service: ArticleService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      title: '',
      description: '',
    };
  }


  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postArticle(form.value).subscribe(res => {
      alert('Inserted successfully');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putArticle(form.value).subscribe(res => {
      alert('Updated successfully');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
