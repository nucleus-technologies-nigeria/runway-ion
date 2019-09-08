import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    SERVER_ADDRESS: string = 'http://127.0.0.1:8071';

    constructor() { }

    getApi(){
        return this.SERVER_ADDRESS;
    }
}
