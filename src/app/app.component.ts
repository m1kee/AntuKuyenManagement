import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
	faBoxes,
	faHandHoldingUsd,
	faPiggyBank,
} from '@fortawesome/free-solid-svg-icons';
import { environment } from '../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
	version: string = environment.version;
	public appPages = [
		{
			title: 'Catálogo',
			url: '/product-list',
			icon: faBoxes,
		},
		{
			title: 'Ventas',
			url: '/sells',
			icon: faHandHoldingUsd,
		},
		{
			title: 'Cuenta',
			url: '/account',
			icon: faPiggyBank,
		},
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	ngOnInit() {}
}
