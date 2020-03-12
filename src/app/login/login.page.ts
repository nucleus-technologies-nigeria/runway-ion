import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    username: string = '';
    password: string = '';
    errOc: boolean;
    affOc: boolean;
    err: string;
    aff: string;
    lastTimer: any;

    constructor(
        private router: Router,
        private auth: AuthenticationService,
        private loading: LoadingController
    ) { }

    ngOnInit() {
    }

    async validate() {
        let wsp = /^\s*$/;
        if (!this.username || !this.password) {
            this.setErr("All fields are required");
        }
        else if (wsp.test(this.username) || wsp.test(this.password)) {
            this.setErr("All fields are required");
        }
        else {
            let l1 = await this.loading.create({
                message: "Logging in"
            });

            await l1.present();

            this.auth.log_in(this.username, this.password).subscribe((data) => {
                l1.dismiss();
                if (data.success) {
                    this.setAff("Successful! Logging in...");
                    this.router.navigateByUrl('/', { skipLocationChange: true });
                }
                else {
                    this.setErr(data.reason);
                }
            }, () => {
                l1.dismiss();
                this.setErr("An error occured logging you in. Please check your connection.");
            });
        }
    }

    setErr(text: string) {
        this.affOc = false;
        this.aff = '';
        this.err = text;
        this.errOc = true;
        if (this.lastTimer) {
            clearTimeout(this.lastTimer);
        }
        let c_timer = setTimeout(() => {
            this.err = '';
            this.errOc = false;
        }, 5000);
        this.lastTimer = c_timer;
    }

    setAff(text: string) {
        this.errOc = false;
        this.err = '';
        this.aff = text;
        this.affOc = true;
        if (this.lastTimer) {
            clearTimeout(this.lastTimer);
        }
        let c_timer = setTimeout(() => {
            this.aff = '';
            this.affOc = false;
        }, 5000);
        this.lastTimer = c_timer;
    }
}
