import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

    constructor(
        private router: Router
    ) {
        /* 
        
        1*Orders
        3*Products
        2*Returns
        4*Analytics
        5*Settings
        3**Coupons and discounts
        4**TruNort Accounts

        */
    }

    ngOnInit() {
    }

}
