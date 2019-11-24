import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      username: '',
      password: '',
    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.login(form.value).subscribe(res => {
      alert('Inserted successfully');
      this.resetForm(form);
    });
  }

}
