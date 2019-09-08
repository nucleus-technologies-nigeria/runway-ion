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

    logged_in(): Observable<any>{
        return this.request.request('mobile', 'get');
    }
}
