import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})

export class AppComponent {
    logged_in: boolean = true;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private auth: AuthenticationService,
        private router: Router
    ) {
        this.initializeApp();
        this.auth.logged_in().subscribe((data) => {
            if(!data.success) {
                this.router.navigateByUrl('/login', { skipLocationChange: true });
            }
        }, () => {
            this.router.navigateByUrl('/error', { skipLocationChange: true });
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
