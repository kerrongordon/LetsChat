import { Component } from '@angular/core';
import { IonicPage, App, ViewController, NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  register : FormGroup;

  constructor(
    public viewCtrl: ViewController,
    public appCtrl: App,
    private _AuthProvider: AuthProvider,
    private formBuilder: FormBuilder,
    public navCtrl: NavController
  ) {
    this.register = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],  
      confirmPass: ['', Validators.required],  
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToLoginPage() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNavById('LoginPage')      
  }

  registerForm() {
    console.log(this.register.value)
    const user: User = this.register.value
    return this._AuthProvider.register(user.firstname, user.lastname, user.email, user.password)
                .then(() => console.log('new user'))
                .catch(error => console.log(error))
  }

}

interface User {
  confirmPass: string,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
}
