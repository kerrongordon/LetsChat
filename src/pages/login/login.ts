import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  auth: any;

  logininfor : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _AuthProvider: AuthProvider,
    private formBuilder: FormBuilder,
    ) {
      this.logininfor = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],    
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToRegisterPage() {
    return this.navCtrl.push('RegisterPage')
  }

  loginForm() {
    const login = this.logininfor.value
    return this._AuthProvider.login(login.email, login.password)
           .then(() => this.navCtrl.setRoot('TabmenuPage'))
  }

}
