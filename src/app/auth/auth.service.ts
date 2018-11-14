import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public angularFire: AngularFireAuth, private router: Router) {
    this.angularFire.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password).then(user => {
      console.log(user);
      this.router.navigate(['/compilations']);
    }).catch(error => {
      console.log(error);
    });
  }

  register(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log(user);
      this.router.navigate(['/new']);
    }).catch(error => {
      console.log(error);
    });
  }

  logout() {
    this.angularFire.auth.signOut();
    this.router.navigate(['/login']);
  }
}
