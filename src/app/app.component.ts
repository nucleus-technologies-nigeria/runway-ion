import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './authentication.service';

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
        private auth: AuthenticationService
    ) {
        this.initializeApp();
        this.auth.logged_in().subscribe((data)=>{
            console.log(data);
            if(data.success){
                if(data.token){
                    localStorage.setItem('access_token', data.token);//change to sqlite local storage but only w/sub and when there's enough content to also do a build
                }
            }
        }, (err)=>{
            console.log("An error occured");
            console.error(err);
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
