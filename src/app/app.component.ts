import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC7AwuGZIYnCgZO9pSROTpFYv76dPBZSpA",
      authDomain: "ventelivre-592b3.firebaseapp.com",
      databaseURL: "https://ventelivre-592b3.firebaseio.com",
      projectId: "ventelivre-592b3",
      storageBucket: "",
      messagingSenderId: "154418317536"
    };
    firebase.initializeApp(config);
  }
}
