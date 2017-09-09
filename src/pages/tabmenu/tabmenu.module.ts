import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabmenuPage } from './tabmenu';

@NgModule({
  declarations: [
    TabmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(TabmenuPage),
  ]
})
export class TabmenuPageModule {}
