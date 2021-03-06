import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Config } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';

import { AuthService } from '../services/auth.service';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),
		AngularFireModule.initializeApp(firebaseConfig.fire),
		ComponentsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule,
		NgxErrorsModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		LoginPage,
		SignupPage
	],
	providers: [
		Config,
		StatusBar,
		AngularFireAuth,
		AuthService
	]
})
export class AppModule {
}
