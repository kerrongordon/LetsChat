import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-tabmenu',
  templateUrl: 'tabmenu.html'
})
export class TabmenuPage {

  chatRoot = 'ChatPage'
  usersRoot = 'UsersPage'
  settingsRoot = 'SettingsPage'

  constructor(
    public navCtrl: NavController,
    private _AuthProvider: AuthProvider
  ) {  }

  logout() {
    return this._AuthProvider.logout()
      .then(() => this.goToLoginPage())
  }

  goToLoginPage() {
    return this.navCtrl.setRoot('LoginPage')
  }

}
