import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  zone: NgZone = new NgZone({});

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    const self = this;
    console.log('Try to login');
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential;
      // The signed-in user info.
      const user = result.user;
      console.log(JSON.stringify(user));
      localStorage.setItem('user', JSON.stringify(user));
      self.zone.run(() => {
        self.router.navigateByUrl('ideas');
      });
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  }

}
