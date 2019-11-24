import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AuthenticationService } from '../shared/services/authentication.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {

    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
