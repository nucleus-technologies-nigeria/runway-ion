import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressService } from "./address.service";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    api: string;
    token: string;

    constructor(
        private http: HttpClient,
        private address: AddressService
    ) {
        this.api = this.address.getApi();
        this.token = localStorage.getItem('access_token');
    }

    request(path: string, method: string, body?: any): Observable<any> {
        if (this.token) {
            if (method === 'post') {
                return this.http.post(`${this.api}/${path}`, body, { headers: { Authorization: `Bearer ${this.token}` } });
            }
            else {
                return this.http.get(`${this.api}/${path}`, { headers: { Authorization: `Bearer ${this.token}` } });
            }
        }
        else {
            if (method === 'post') {
                return this.http.post(`${this.api}/${path}`, body);
            }
            else {
                return this.http.get(`${this.api}/${path}`);
            }
        }
    }
}
