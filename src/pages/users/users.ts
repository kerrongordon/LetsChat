import { FirebaseListObservable } from 'angularfire2/database';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
 
 users: FirebaseListObservable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _AuthProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    this.users = this._AuthProvider.users
  }

  viewProfile(e) {
    console.log(e)
  }

  addFriend(e) {
    console.log(e)
  }

  removeFriend(e) {
    console.log(e)
  }

}
