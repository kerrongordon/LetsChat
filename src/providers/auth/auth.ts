import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class AuthProvider {
  
  auth: Subscription;
  getDate: Date;
  users: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) {
    console.log('Hello AuthProvider Provider ', afAuth.authState);
    this.user = afAuth.authState;
    this.users = db.list('users')
    this.getDate = new Date()

    afAuth.authState.subscribe(auth => console.log(this.auth))
    console.log(afAuth.auth.currentUser)
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  register(firstname: string, lastname: string, email: string, password: string) {
    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      timestamp: this.getDate.getTime()
    }
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(() => this.users.push(user))
        .catch((error) => console.log('error', error))
  }

  logout() {
    return this.afAuth.auth.signOut()
  }

}
