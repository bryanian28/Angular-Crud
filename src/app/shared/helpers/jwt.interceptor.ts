import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    // tslint:disable-next-line: no-shadowed-variable
    constructor(private AuthenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.AuthenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
          request = request.clone({
                setHeaders: {
                    Authorization: currentUser.token
                }
            });
        }

        return next.handle(request);
    }
}
