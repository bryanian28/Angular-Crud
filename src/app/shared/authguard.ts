import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

const TOKEN = 'TOKEN';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    setToken(token: string): void {
        localStorage.setItem(TOKEN, token);
    }

    isLogged() {
        return localStorage.getItem(TOKEN) != null;
    }

    canActivate() {
        return true;
    }
}
