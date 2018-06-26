import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyDEczUtLnv0zp7PkYylhmIfjXWyVKN0CNg",
		authDomain: "myplusauth-8bf6c.firebaseapp.com",
		databaseURL: "https://myplusauth-8bf6c.firebaseio.com",
		projectId: "myplusauth-8bf6c",
		storageBucket: "myplusauth-8bf6c.appspot.com",
		messagingSenderId: "281792261280"
	}
};