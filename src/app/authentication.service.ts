import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private request: ApiService
    ) {

    }

    log_in(username: string, password: string): Observable<any> {
        return this.request.request('admin/login', 'post', {
            username: username,
            password: password
        });
    }

    logged_in(): Observable<any> {
        return this.request.request('admin/isLoggedIn', 'get');
    }
}
