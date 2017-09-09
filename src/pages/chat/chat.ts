import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  newMess(e, v) {
    console.log(v)
  }

  newMessKeyEnter(e, v) {
    if (e.keyCode !== 13) return 
      this.newMess(e, v)
  }

}
